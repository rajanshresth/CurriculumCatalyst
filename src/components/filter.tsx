"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const coursesFilter = [
  {
    id: 1,
    name: "Course Type",
    options: ["All Courses", "Free Courses", "Paid Courses"],
  },
  {
    id: 2,
    name: "Languages",
    options: ["Hindi", "English"],
  },
];

const Filter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    courseType: "All Courses",
    language: "English",
  });

  const handleFilterChange = (sectionId: number, option: string) => {
    if (sectionId === 1) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        courseType: option,
      }));
    } else if (sectionId === 2) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        language: option,
      }));
    }
  };

  return (
    <section>
      <NavigationMenu>
        <NavigationMenuList>
          {coursesFilter.map((section) => (
            <NavigationMenuItem key={section.id}>
              <NavigationMenuTrigger>{section.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 flex flex-col gap-4">
                  {section.options.map((option) => (
                    <li key={option}>
                      <NavigationMenuLink asChild>
                        <Button
                          variant={"ghost"}
                          className={cn(
                            "block w-full text-left p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                            {
                              "bg-accent text-accent-foreground":
                                (section.id === 1 &&
                                  selectedFilters.courseType === option) ||
                                (section.id === 2 &&
                                  selectedFilters.language === option),
                            }
                          )}
                          onClick={() => handleFilterChange(section.id, option)}
                        >
                          {option}
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};

export default Filter;
