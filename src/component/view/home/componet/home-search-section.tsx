import React from "react";

type Props = {};

function SearchSection({}: Props) {
  return (
    <div className='w-full text-white bg-[#313131] p-4 rounded-8'>
      <h1>Search</h1>

      <div className='flex flex-col gap-2'>
        <div>
          <h2>name</h2>

          <div className='flex gap-2'>
            <input className='w-full max-w-[420px] p-2 text-[#313131] rounded-4' />
            <button className='bg-white text-[#313131] px-2 rounded-4'>search</button>
          </div>
        </div>

        <div>
          <h2>type</h2>
          <select className='w-full max-w-[420px] p-2 text-[#313131] rounded-4'>
            <option>A</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
