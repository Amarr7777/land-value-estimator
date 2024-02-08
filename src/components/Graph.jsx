import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import graph1 from "../assets/graph1.png";
export function Graph() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
    className="ml-10 mt-6 pb-0 shadow-xl rounded-md w-3/4 ">
      <CardBody>
        {/* <img
          src="https://www.mzrg.com/math/grf13.png"
          alt="card-image"
          className="w-full p-2 h-full"
        /> */}
        <img
          src={graph1}
          alt="card-image"
          style={{ width: "500%", height: "auto" }}
          // className="w-full p-2 h-full"
        />
      </CardBody>
    </motion.div>
  );
}
