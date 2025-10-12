import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import { navbarItems } from "@/config/navbar.config";

export default function App({ Component, pageProps }: AppProps) {
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
        items={navbarItems}
        bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
        textColor="text-white"
        sticky
      />

      <main className="flex-1 mt-16">
        {/* mt-16 = navbar height */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
