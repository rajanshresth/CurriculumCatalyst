import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
export const runtime = "edge";
const isProtectedRoute = createRouteMatcher(["/course", "/admin"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
