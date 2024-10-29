import React from "react";
import DataTable from "./DataTable";
import SlateCard from "./SlateCard";

const VinData = ({ vin, groups, data }) => {
  const year = data.find((element) => element.Variable === "Model Year")?.Value;
  const make = data.find((element) => element.Variable === "Make")?.Value;
  const model = data.find((element) => element.Variable === "Model")?.Value;
  const trim = data.find((element) => element.Variable === "Series")?.Value;

  let title = "";
  if (year && make && model) {
    title = year + " " + make + " " + model;
  }
  if (trim) {
    title += " " + trim;
  }

  groups = groups.filter((el) => !(el === "General" || el === "Engine"));

  return (
    <div className="flex justify-center mt-5 mb-5 gap-2 mx-5 flex-col lg:flex-row">
      <SlateCard>
        <h3 className="text-center text-gray-400 text-xl mb-3">{vin}</h3>
        <h1 className="text-center sm:text-2xl lg:text-3xl mb-3">{title}</h1>

        {["General", "Engine"].map((group, i) => (
          <div key={i}>
            <h2 className="mb-2 tracking-tight leading-none text-2xl dark:text-white">
              {group}
            </h2>

            <DataTable data={data.filter((item) => item.GroupName === group)} />

            <div className="mt-2 mb-7"></div>
          </div>
        ))}

        {groups.map((group, i) => (
          <div key={i}>
            <h2 className="mb-2 tracking-tight leading-none text-2xl dark:text-white">
              {group}
            </h2>

            <DataTable data={data.filter((item) => item.GroupName === group)} />

            <div className="mt-2 mb-7"></div>
          </div>
        ))}
      </SlateCard>
    </div>
  );
};

export default VinData;
