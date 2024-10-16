const express = require("express");
const fetch = require("node-fetch");
// const apicache = require('apicache')
const NodeCache = require("node-cache");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

const baseUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/";

// const cache = apicache.middleware
const cache = new NodeCache({ stdTTL: 600 }); // Cache items for 10 minutes (600 seconds)

// if (process.env.NODE_ENV === 'production') { console.log('In Production') }

app.get("/api/:vin", async (req, res) => {
  const vin = req.params.vin;

  // Fetch data
  let data = await fetchData(vin);
  if (!data) {
    return res.status(400).send({
      message: "Error fetching data",
    });
  }

  // Process data
  data = await processData(data.Results);
  if (!data) {
    return res.status(400).send({
      message: "Bad VIN",
    });
  }

  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function fetchData(vin) {
  // Check if data is cached
  let data = cache.get(`vinData-${vin}`);
  if (data) {
    console.log("Fetching VIN data from cache");
    return data;
  }

  console.log("Fetching VIN data from API");
  try {
    const url = `${baseUrl}decodevin/${vin}?format=json`;
    console.log(url);
    const response = await fetch(url);
    data = await response.json();
    cache.set(`vinData-${vin}`, data);

    return data;
  } catch {
    console.log("Error fetching data");
    return null;
  }
}

async function processData(data) {
  // Check for Error
  if (data.find((el) => el.Variable === "Error Code").Value !== "0") {
    return null;
  }

  data = await addGroupName(data);

  if (!data) {
    return null;
  }

  return data.filter(
    (obj) =>
      obj.GroupName !== null &&
      obj.Value !== null &&
      obj.Value !== "Not Applicable"
  );
}

async function addGroupName(data) {
  // Fetch variable to group mapping data
  let variableData = cache.get("variableData");

  if (variableData) {
    console.log("Fetching Variable data from cache");
  } else {
    console.log("Fetching Variable data from API");
    try {
      const url = `${baseUrl}getvehiclevariablelist?format=json`;
      const response = await fetch(url);
      const json = await response.json();
      variableData = json.Results;

      if (!variableData) {
        console.log("Error fetching variable data");
        return null;
      }

      // console.log(data.filter(item => item.Variable === 'Model'))

      cache.set("variableData", variableData);
    } catch (error) {
      console.log("Network error fetching variable data");
      return null;
    }
  }

  data = data.map((obj) => {
    const GroupName = variableData.find(
      (el) => el.ID === obj.VariableId
    ).GroupName;
    return { ...obj, GroupName };
  });

  return data;
}

module.exports = app;
