import { Button } from "@/components/ui/button";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>New Course</Button>
        <Button>Analytics</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-400  h-[20rem] rounded-md">1-Edit</div>
        <div className="bg-red-400 h-[20rem] rounded-md">2</div>
        <div className="bg-red-400   h-[20rem] rounded-md">3</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
