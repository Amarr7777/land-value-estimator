import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";


export function Estimate() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100vw' }}
    transition={{ duration: 1.2 }}
    className="ml-10 p-5 mt-6 w-96 shadow-xl rounded-md bg-purple-600 text-white">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Estimated Value
        </Typography>
        <Typography>
          There would be a{" "}
          <span className="font-bold text-white text-lg">205% </span>
          to <span className="font-bold text-white text-lg">308% </span> change
          in the market value from the fair value
        </Typography>
      </CardBody>
    </motion.div>
  );
}
