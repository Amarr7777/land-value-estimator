import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import graph1 from "../assets/graph2.png";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import srcData from "../constant/index.json";

function Graph2() {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  // Extracting unique land types and their respective market values
  const landTypes = {};
  srcData.forEach((data) => {
    if (!landTypes[data.land_type]) {
      landTypes[data.land_type] = data.market_value;
    } else {
      landTypes[data.land_type] += data.market_value;
    }
  });

  const landTypeLabels = Object.keys(landTypes);
  const landTypeMarketValues = Object.values(landTypes);

  const baseColor = "rgb(88 ,28 ,135)";
  const colors = [];
  for (let i = 2; i < landTypeLabels.length; i++) {
    const shade = `rgba(192, 132, 252, ${i / landTypeLabels.length})`;
    colors.push(shade);
  }
  const options = {
    plugins: {
      legend: {
        display: false, // Remove legend
      },
    },
  };

  const pieChartData = {
    labels: landTypeLabels,
    datasets: [
      {
        data: landTypeMarketValues,
        backgroundColor: colors,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="ml-10 mt-6 pb-0 shadow-xl rounded-md  "
      style={{ width: "500px", height: "250px" }}
    >
      <CardBody className="w-full h-full p-2">
        <Doughnut data={pieChartData} options={options} />
      </CardBody>
    </motion.div>
  );
}

export default Graph2;
