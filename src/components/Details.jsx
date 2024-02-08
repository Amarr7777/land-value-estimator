import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

export function Details() {
  return (
    <AnimatePresence>
    < motion.div 
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100vw' }}
    transition={{ duration: 1 }}
    className="ml-10 p-5 mt-6  shadow-xl rounded-md w-96 bg-purple-800 text-white">
      <CardBody className="flex  justify-evenly">
        <div>
          <Typography>Village</Typography>
          <Typography>Land type</Typography>
          <Typography>Survey number</Typography>
        </div>
        <div>
          <Typography>:</Typography>
          <Typography>:</Typography>
          <Typography>:</Typography>
        </div>
        <div>
          <Typography>Chertha Thekku</Typography>
          <Typography>Wet Land</Typography>
          <Typography>238</Typography>
        </div>
      </CardBody>
    </motion.div>
    </AnimatePresence>
  );
}
