import React from "react";
import Button from "../Button";
import { fugaz } from "@/libs/fonts";
import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-fll max-w-2xl flex flex-col items-start lg:justify-center">
        <h1
          className={`text-4xl md:text-6xl text-[#1E90FF] ${fugaz.className}`}
        >
          Freedom to Move, Anytime, Anywhere
        </h1>
        <p className="my-5 text-slate-500">
          Discover the easiest way to rent a car for your adventures, errands,
          or business trips. With OnTheGo, you&#39;re always in the driver&#39;s
          seat.
        </p>
        <Button>Search. Book. Drive.</Button>
      </div>

      <div>
        <Image
          src={"/cars/benz.png"}
          alt="Benz"
          width={400}
          height={500}
          className="w-full object-cover align-top"
        />
      </div>
    </section>
  );
}

export default Hero;
