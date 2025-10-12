import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import { UserRole } from "@/types/navbarTypes";
import { getNavbarItems } from "@/config/navbar.config";

export default function App({ Component, pageProps }: AppProps) {
  const currentUserRole: UserRole = "user"; // hardcoded for now, replace later with auth
  const navbarItems = getNavbarItems(currentUserRole);

  return (
    <>
      <Head>
        <title>Social-Media-Curator</title>
        <meta name="description" content="Learning Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-v2.ico" />
      </Head>

      <Navbar
        brand="Politician Curator"
        items={navbarItems} // <-- call the function to get the array
        bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
        textColor="text-white"
        sticky
      />

      <main className="flex-1 mt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
