"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const HomeRedirect = () => {
  const router = useRouter();

  // Replace with your logic to get logged-in user role
  const userRole: "superadmin" | "moderator" | "user" | undefined = undefined; // undefined = not logged in

  useEffect(() => {
    let redirectPath = "/user/feed"; // default guest feed
    if (userRole) {
      redirectPath =
        userRole === "superadmin"
          ? "/superadmin/feed"
          : userRole === "moderator"
          ? "/moderator/feed"
          : "/user/feed";
    } else {
      // optional: redirect to /auth/login if not logged in
      // redirectPath = "/auth/login";
    }

    router.replace(redirectPath);
  }, [router, userRole]);

  return null; // nothing to render on "/"
};

export default HomeRedirect;
