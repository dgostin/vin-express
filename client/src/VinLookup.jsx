import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import VinData from "./VinData";
import WhatIsAVIN from "./WhatIsAVIN";

const VinLookup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validVin, setValidVin] = useState("");
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const backendUrl =
    process.env.NODE_ENV === "production"
      ? "https://vin-express-backend.onrender.com"
      : "http://localhost:3000";

  const fetchData = async (vin) => {
    // console.log(`Backend is ${backendUrl}`);

    setLoading(true);
    try {
      // console.log("fetching VIN:", vin);

      const response = await fetch(`${backendUrl}/${vin}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setData(result);

      // Create an array of Groups
      let tempGroups = [...new Set(result.map((item) => item.GroupName))];
      // Move "Engine" to beginning
      tempGroups = moveToFront(tempGroups, "Engine");
      // Move "General" to beginning
      tempGroups = moveToFront(tempGroups, "General");
      setGroups(tempGroups);

      //   setLoading(false);
      setValidVin(vin);
    } catch (error) {
      console.log(error);
      setErrorMsg("Error: Invalid VIN.");
    }
    setLoading(false);
  };

  const moveToFront = (array, element) => {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1); // Remove the element from its current position
      array.unshift(element); // Add the element to the beginning of the array
    }
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9]{17}$/.test(input)) {
      navigate(`/?vin=${input}`);
      fetchData(input);
    } else {
      setErrorMsg("Error: VIN must be 17 characters.");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlVin = params.get("vin");
    if (urlVin) {
      if (/^[a-zA-Z0-9]{17}$/.test(urlVin)) {
        setInput(urlVin);
        fetchData(urlVin);
      } else {
        setErrorMsg("Error: VIN must be 17 characters.");
      }
    }
  }, [location.search]);

  return (
    <>
      <SearchForm
        setData={setData}
        setGroups={setGroups}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        setErrorMsg={setErrorMsg}
      />
      {errorMsg && (
        <div className="flex justify-center">
          <div className="mb-3 p-2 text-red-700 bg-white rounded">
            {errorMsg}
          </div>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {validVin && <VinData vin={validVin} groups={groups} data={data} />}
      {!validVin && !loading && <WhatIsAVIN />}
    </>
  );
};

export default VinLookup;
