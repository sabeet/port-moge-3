import React from "react";
import Entry from "./Entry";

function Frontend() {
  return (
    <>
      <div className="text-xl text-center">Frontend</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="Port Moge 2"
        link="https://sabeet.github.io/port-moge-2/"
        description="A simple react website I created to link professionals to my resume. Uses github workflows/action to update website"
      />
      <Entry
        title="Sabeet.dev"
        link="https://sabeet.dev"
        description=":)"
      />
    </>
  );
}

export default Frontend;
