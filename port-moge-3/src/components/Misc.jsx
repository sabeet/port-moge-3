import React from "react";
import Entry from "./Entry";

function Misc() {
  return (
    <>
      <div className="text-xl text-center">Miscellaneous</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="Hit The Block"
        link="http://sabeet.me/hit.html"
        description="Using the MatterJS library, I created a fun interactive webpage that let's you drop some boxes from the top"
      />
    </>
  );
}

export default Misc;
