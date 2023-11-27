import React from "react";
import Entry from "./Entry";

function Page3D() {
  return (
    <>
      <div className="text-xl text-center">3D</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="Unity"
        link="http://sabeet.me/unity/unityGame.html"
        description="A ball runner game I made in 12 hours during the Lehman College 2019 Hackathon. This project uses C# and Unity."
      />
      
    </>
  )
}

export default Page3D;
