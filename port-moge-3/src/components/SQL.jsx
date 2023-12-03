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
      <Entry
        title="TSQL to Java"
        link="https://github.com/sabeet/jdbc-JTable-Vector"
        description="With the power of JDBC, Jtables, and Vectors, I used TSQL and Java to load data onto a jtable from Microsoft TSQL server using vectors."
      />
      <Entry
        title="Data for Quotes Application"
        link="https://github.com/sabeet/quote-database/blob/main/quotes.sql"
        description="This is setup/creation of data for the Quotes Fullstack Application"
      />
    </>
  );
}

export default SQL;
