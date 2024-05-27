"use client";

import Link from "next/link";
import React from "react";

type Props = {};

function HomeError({}: Props) {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
        <h1>Something wrong...</h1>
        <Link href='/'>
          <button className='border-1 px-2 rounded-4'>Go Home</button>
        </Link>
      </div>
    </section>
  );
}

export default HomeError;
