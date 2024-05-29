"use client";

import React from "react";
import { useRouter } from "next/navigation";
import homePokeapiLogo from "@/resource/image/home/home-pokeapi-logo.png";
import Image from "next/image";

function TitleSection() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push(`/?page=1`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <Image
        src={homePokeapiLogo}
        alt='home-pokeapi-logo'
        priority
        onClick={() => handleClickLogo()}
        className='cursor-pointer'
      />
    </section>
  );
}

export default TitleSection;
