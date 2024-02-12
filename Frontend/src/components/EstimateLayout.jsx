import React from "react";
import { Button, Input } from "@material-tailwind/react";

function EstimateLayout() {
  return (
    <div className="flex flex-col gap-4 h-screen p-10 justify-center items-center">
      <div className="felx flex-col items-center ">
        <div className="flex w-72 flex-col gap-6 mb-2">
          <Input
            color="blue"
            placeholder="Village"
            className="rounded-lg p-2 border border-black"
          />
          <Input
            color="purple"
            placeholder="Land Type"
            className="rounded-lg p-2 border border-black"
          />
          <Input
            color="indigo"
            placeholder="Survey Number"
            className="rounded-lg p-2 border border-black"
          />
        </div>
        <Button
          variant="text"
          size="sm"
          className="mt-5 border border-black rounded-md "
        >
          <span className="text-black font-light">Estimate </span>
        </Button>
      </div>
    </div>
  );
}

export default EstimateLayout;
