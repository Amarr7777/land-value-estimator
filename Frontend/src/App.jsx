import { useState } from "react";
import "./App.css";
import { CardDefault } from "./components/CardDefault";
import EstimateLayout from "./components/EstimateLayout";
import { Graph } from "./components/Graph";
import Layout from "./components/Layout";
import MidNav from "./components/MidNav";
import { NavbarDefault } from "./components/NavbarDefault";

function App() {
  const [estimateClick, setEstimateClick] = useState(false);
  if (!estimateClick)
    return (
      <MidNav
        estimateClick={estimateClick}
        setEstimateClick={setEstimateClick}
      />
    );
  else {
    return (
      <div className="bg-white min-h-screen">
        <NavbarDefault />
        <Layout />
      </div>
    );
  }
  // <MidNav/>
}

export default App;
