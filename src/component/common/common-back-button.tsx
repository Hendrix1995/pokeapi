"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleClickBack = () => {
    router.push(`/?page=1`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.refresh();
  };

  return (
    <button onClick={() => handleClickBack()} className='mb-2 px-2 absolute bottom-0 text-white bg-[#313131] rounded-4'>
      Go Back
    </button>
  );
}
