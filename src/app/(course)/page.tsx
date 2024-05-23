import Filter from "@/components/filter";
import React from "react";

const CoursePage = () => {
  return (
    <div className="flex flex-col gap-4 p-3 mt-2">
      <Filter />
      <div className="grid grid-cols-3 gap-4 h-screen">
        <div className="bg-red-300 grid-cols-1 h-[20rem] rounded-md">1</div>
        <div className="bg-blue-300 grid-cols-3 h-[20rem] rounded-md">2</div>
        <div className="bg-green-300 grid-cols-1 h-[20rem] rounded-md">3</div>
        <div className="bg-green-300 grid-cols-1 h-[20rem] rounded-md">3</div>
        <div className="bg-green-300 grid-cols-1 h-[20rem] rounded-md">3</div>
        <div className="bg-green-300 grid-cols-1 h-[20rem] rounded-md">3</div>
      </div>
    </div>
  );
};

export default CoursePage;
