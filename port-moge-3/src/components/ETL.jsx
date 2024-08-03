import React from "react";
import Entry from "./Entry";

function ETL() {
  return (
    <>
      <div className="text-xl text-center">
        Extraction, Transformation, & Load
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="Databircks Data Engineering Associates Certification"
        link="#"
        description="In the process of obtaining this certificate."
      />
    </>
  );
}

export default ETL;