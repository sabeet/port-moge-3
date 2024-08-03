import React from "react";
import Entry from "./Entry";

function Tableau() {
  return (
    <>
      <div className="text-xl text-center">Tableau/PowerBi</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      
      <Entry
        title="Tableau: Average Mobile Display Size over The Years"
        link="https://public.tableau.com/app/profile/sabeet.chowdhury/viz/AvgMobileDisplaySIzeoverTheYears/Sheet1"
        description="See the average size of mobile phone sizes increase over the past decade. Dataset from Kaggle"
      />
    </>
  );
}

export default Tableau;