import React from "react";
import Entry from "./Entry";

function SQL() {
  return (
    <>
      <div className="text-xl text-center">SQL</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="Leetcode"
        link="https://github.com/sabeet/SQL-Portfolio"
        description="Here lies the github repository of all the SQL based Leetcode questions i've done so far."
      />
    </>
  );
}

export default SQL;
