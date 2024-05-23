import { Feature } from "@/components/Feature";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-8 min-h-screen min-w-full gap-4">
      <h1 className="font-extrabold text-transparent text-4xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        Welcome to CurriculumCatalyst
      </h1>
      <p>
        Your personalized guide to the best courses tailored to your interests.
      </p>
      <Link href={"/sign-in"}>
        <Button>Get Started</Button>
      </Link>

      <Feature />
      <Testimonials />
      <div id="footer" className="mt-4 flex gap-4">
        <h1 className="text-center">
          Developed by{" "}
          <Link
            href="https://twitter.com/rajanstha_10x"
            className="underline font-extrabold"
          >
            Rajan Shrestha
          </Link>
        </h1>
        <Link href={"https://github.com/rajanshresth/CurriculumCatalyst"}>
          <Github size={24} />
        </Link>
      </div>
    </main>
  );
}
