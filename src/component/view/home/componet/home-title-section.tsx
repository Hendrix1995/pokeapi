"use client";

import React from "react";
import homePokeapiLogo from "@/resource/image/home/home-pokeapi-logo.png";
import Image from "next/image";

function TitleSection() {
  return <Image src={homePokeapiLogo} alt='home-pokeapi-logo' priority />;
}

export default TitleSection;
