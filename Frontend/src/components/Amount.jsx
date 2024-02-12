import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

export function Amount() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100vw' }}
    transition={{ duration: 1.4 }}
    className="ml-10 p-5 mt-6 w-96 shadow-xl rounded-md bg-purple-400 text-white">
      <CardBody>
        <Typography>
          Your estimated amount will be{" "}
          <span className="font-bold text-black text-lg">₹160000</span> per Are(s)
        </Typography>
      </CardBody>
    </motion.div>
  );
}
