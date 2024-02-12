import React from "react";
import { Graph } from "./Graph";
import { Accuracy } from "./FairValue";
import { Estimate } from "./Estimate";
import { Amount } from "./Amount";
import { Details } from "./Details";
import Graph2 from "./Graph2";
// import './Layout.css'

function Layout() {
  return (
    <div>
      <p className="font-bold pt-10 pl-10">Estimate Overview</p>
      <div className="flex h-auto justify-center pt-5 mx-5 ">
        <div className="flex justify-center ">
          <div className="flex-col w-full rounded-lg laypu">
            <Graph2 />
            <Graph />
          </div>
          <div className="flex-col items-center justify-center content-center p-5 gap-5 rounded-xl ">
            <Details />
            <Estimate />
            <Amount />
            <Accuracy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
