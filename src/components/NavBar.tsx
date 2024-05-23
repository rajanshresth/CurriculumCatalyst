"use client";
import React, { Suspense, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between gap-4 items-center ">
      <Link
        href="/"
        className="hidden lg:flex text-2xl underline-offset-1 font-extrabold"
      >
        CurriculumCatalyst.
      </Link>
      <div className="w-3/5 lg:w-2/5">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <div className="hidden lg:flex md:flex gap-8 items-center">
        <NavigationRoadmap />
        <span className="font-bold cursor-pointer">My Course</span>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("query") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>(defaultQuery);

  const handleSearch = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          ref={inputRef}
          disabled={isSearching}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
            if (e.key === "Escape") inputRef.current?.blur();
          }}
          className="absolute inset-0 h-full"
          placeholder="Search"
        />
        <Button
          disabled={isSearching}
          size="sm"
          onClick={handleSearch}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Suspense>
              <Search className="h-6 w-6" />
            </Suspense>
          )}
        </Button>
      </div>
    </div>
  );
};

const NavigationRoadmap: React.FC = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Roadmap</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <RoadmapListItem
              href="/roadmap/frontend"
              title="Frontend Development"
            >
              Learn the basics of HTML, CSS, JavaScript, and modern frameworks.
            </RoadmapListItem>
            <RoadmapListItem
              href="/roadmap/backend"
              title="Backend Development"
            >
              Master server-side programming, databases, and APIs.
            </RoadmapListItem>
            <RoadmapListItem
              href="/roadmap/fullstack"
              title="Full-stack Development"
            >
              Become proficient in both frontend and backend technologies.
            </RoadmapListItem>
            <RoadmapListItem href="/roadmap/ai" title="AI & ML">
              Dive into artificial intelligence and machine learning.
            </RoadmapListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const RoadmapListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));

RoadmapListItem.displayName = "RoadmapListItem";

export default NavBar;
