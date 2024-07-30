"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import Logo from "../public/ronny-logo.svg";

export default function Home() {
  const plantarrayLog = useQuery(api.utils.plantarrayLog.get);
  console.log(plantarrayLog);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 px-5 py-10">
      <header id="header" className="flex flex-row gap-5 justify-evenly w-full">
        <button>LOGO</button>
      </header>

      <section id="input-section" className="mt-16 flex-1">
        <form className="border-2 flex flex-col gap-5 items-center w-96 ">
          <label htmlFor="autocomplete">Search Query</label>
          <input id="autocomplete" type="text"></input>
          <div id="chips">
            <div className="flex flex-row gap-4 ">
              <p>example</p>
              <p>example</p>
              <p>example</p>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <p>example</p>
              <p>example</p>
            </div>
          </div>
          <button type="submit">icon - FILTER QUERIES</button>
        </form>
      </section>

      <footer className="">
        <p>Designed and Built by</p>
        <p>© Tomer Bourstein </p>
      </footer>
    </main>
  );
}
