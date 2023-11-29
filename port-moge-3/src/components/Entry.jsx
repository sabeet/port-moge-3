import React from "react";

function Entry({ title, description, link }) {
  return (
    <>
      <a href={link} target="_blank">
        <div className="hover:bg-slate-800 pl-4">
          <div className="text-xl text-gray-200">{title}</div>
          <div className="flex flex-col text-gray-300">
            <div className="text-gray-400">{description}</div>
          </div>
        </div>
      </a>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
}

export default Entry;
