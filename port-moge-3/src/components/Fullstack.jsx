import React from "react";
import Entry from "./Entry";

function Fullstack() {
  return (
    <>
      <div className="text-xl text-center">Fullstack</div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Entry
        title="QC Prof Stat"
        link="https://qc-prof-stat.web.app/"
        description="Displays The Grading Distribution of Professors at Queens College. This website was originally made by me but is currently maintained by my colleague, Justin Schreiber. Previously used AWS S3, EC2, RDBS, React, Node, Express, ChartJS."
      />
      <Entry
        title="Quotes"
        link="https://quotes-machine-front.pages.dev/"
        description="This is a fullstack web app used to display translations of words in 6 languages. It's called quotes because most JSON data is wrapped in quotation marks. This app uses Vite, React, Planetscale/mysql, Java/SpringBoot, Docker, and Cloudflare Tunnels. This API is hosted locally but Cloudflare tunnels allow for data to be exposed relatively safely locally."
      />
    </>
  );
}

export default Fullstack;
