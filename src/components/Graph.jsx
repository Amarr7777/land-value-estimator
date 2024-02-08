import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import srcData from "../constant/index.json";
export function Graph() {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  const landTypeMapping = {
    "Wet land": "WL",
    "Residential Plot": "RP",
    "Residential Plot with NH/PWD road access": "RPNH",
    "Residential Plot without vehicular access": "RPWV",
    "Residential Plot with Corp./Mun./Panch. road access": "RPCMP",
    "Commercially important Plot": "CIP",
  };

  const landTypes = srcData.map((data) => landTypeMapping[data.land_type]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="ml-10 mt-6 pb-0 shadow-xl rounded-md w-4/5  "
      style={{ width: "500px", height: "250px" }}
    >
      <CardBody className="h-full p-2">
        <Bar
          data={{
            labels: [...landTypes],
            datasets: [
              {
                label: "Market Value",
                data: srcData.map((data) => data.market_value),
                backgroundColor: "rgb(192, 132, 252)",
                labels: landTypes,
              },
              {
                label: "Fair Value",
                data: srcData.map((data) => data.fair_value),
                backgroundColor: "rgb(88 ,28 ,135)",
                labels: landTypes,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </CardBody>
    </motion.div>
  );
}
