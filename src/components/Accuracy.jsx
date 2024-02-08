import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
function Accuracy() {
  return (
    <Card
    className="ml-10 p-5 mt-6 w-96 shadow-xl rounded-md bg-purple-200 text-white">
      <CardBody>
        <Typography className='font-bold text-black text-center'>
          Our Accuracy is 90%
        </Typography>
      </CardBody>
    </Card>
  )
}

export default Accuracy

