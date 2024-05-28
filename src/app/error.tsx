"use client";

function HomeError() {
  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
        <h1>Something wrong...</h1>
        <form>
          <button className='border-1 px-2 rounded-4'>Go Home</button>
        </form>
      </div>
    </section>
  );
}

export default HomeError;
