import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 h-screen ">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <div>
        <Link href="/course">
          <Button>Go to course</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
