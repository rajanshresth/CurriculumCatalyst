import { Button } from "@/components/ui/button";
import React from "react";

const CourseAdminPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="bg-green-400 h-[50%] w-[40%] rounded-lg"></div>
      <div className="flex flex-col gap-6 w-[80%]">
        <Button className="h-16">1</Button>
        <Button className="h-16">2</Button>
        <Button className="h-16">3</Button>
      </div>
      <Button className=" w-12">POST</Button>
    </div>
  );
};

export default CourseAdminPage;
