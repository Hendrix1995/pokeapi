"use client";

import { useRouter } from "next/navigation";

function HomeError() {
  const router = useRouter();

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
        <h1>Something wrong...</h1>
        <button className='border-1 px-2 rounded-4' onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    </section>
  );
}

export default HomeError;
