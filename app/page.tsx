"use client";

import Providers from "@/components/Providers";
import Hero from "@/sections/Hero";
import Empowerment from "@/sections/Empowerment";
import PaymentOptions from "@/sections/PaymentOptions";
import Stats from "@/sections/Stats";
import Customers from "@/sections/Customers";
import SuiteSpot from "@/sections/SuiteSpot";
import GoLive from "@/sections/GoLive";

export default function Home() {
  return (
    <Providers>
      <main>
        <Hero />
        <Empowerment />
        <PaymentOptions />
        <Stats />
        <Customers />
        <SuiteSpot />
        <GoLive />
      </main>
    </Providers>
  );
}
