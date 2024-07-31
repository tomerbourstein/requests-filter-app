// "use client";
// import { useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";
// import { useEffect, useState } from "react";
// import { GET } from "./api/route";
// import Logo from "../public/ronny-logo.svg";
// import { logManipultaion } from "@/lib/logManipulation";

import { logManipulation } from "@/lib/logManipulation";

export default function Home() {
  // const plantarrayLog = useQuery(api.utils.plantarrayLog.get);
  const data = logManipulation();
  console.log(data[1000]);

  // const { id, time } = data[100];
  // const { id, time } = second;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 px-5 py-10">
      <header id="header" className="flex flex-row gap-5 justify-evenly w-full">
        <button>LOGO</button>
      </header>
      {/* 0 */}

      <footer className="">
        <p>Designed and Built by</p>
        <p>© Tomer Bourstein </p>
      </footer>
    </main>
  );
}
