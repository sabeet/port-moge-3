import React from "react";

function WorkCard({ company, role, logo }) {
  return (
    <div className="flex flex-row p-5 gap-2 border border-1">
      <div>
        <img
          src={logo}
          className="object-scale-down
                    grayscale 
                    brightness-200 
                    object-left 
                    h-24 
                    w-24
                    "
        />
      </div>
      <div className="flex flex-col h-24 w-48 justify-center">
        <div>{company}</div>
        <div>{role}</div>
      </div>
    </div>
  );
}

export default WorkCard;
