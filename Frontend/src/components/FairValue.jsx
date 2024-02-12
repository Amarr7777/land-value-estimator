import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

export function Accuracy() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100vw' }}
    transition={{ duration: 1.6 }}
    className="ml-10 p-5 mt-6 w-96 shadow-xl rounded-md bg-purple-200 text-black">
      <CardBody className="flex flex-col gap-4 h-full justify-center">
        <Typography className="text-center">
          Fair value of the property is <span className="font-bold text-black text-lg">₹16535</span> per Are(s)
        </Typography>
      </CardBody>
    </motion.div>
  );
}
