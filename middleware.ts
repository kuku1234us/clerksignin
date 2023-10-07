import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "cn"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => {
    console.log("Path:", req.nextUrl.pathname);
    return intlMiddleware(req);
  },

  publicRoutes: ["/", "/:locale/sign-in"],
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|pubimages|.*\\..*).*)"],
};
