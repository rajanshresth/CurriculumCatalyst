import { Button } from "@/components/ui/button";
import React from "react";

const IndividualCourse = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 mt-4">
      <h1 className="text-4xl font-bold">Course {params.id}</h1>
      <div className="bg-green-400 h-[32rem] w-[60%] ">Video</div>
      <div className="flex justify-between items-center w-[60%]">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
      <div className="h-16 bg-red-500 w-[60%]">
        <p>Description</p>
      </div>
    </div>
  );
};

export default IndividualCourse;
