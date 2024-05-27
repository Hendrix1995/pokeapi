"use client";

import { POKEMON_TYPES } from "@/script/const/pokemon-types";
import React, { useState } from "react";

type Props = {};

function SearchSection({}: Props) {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='w-full text-white bg-[#313131] p-4 rounded-8'>
      <h1>Search</h1>

      <div className='flex flex-col gap-2'>
        <div>
          <h2>name</h2>

          <form className='flex gap-2'>
            <input className='w-full max-w-[420px] p-2 text-[#313131] rounded-4' onChange={(e) => handleOnChange(e)} />
            <button className='bg-white text-[#313131] px-2 rounded-4'>search</button>
          </form>
        </div>

        <div>
          <h2>type</h2>
          <select className='w-full max-w-[420px] p-2 text-[#313131] rounded-4'>
            {POKEMON_TYPES.map((type) => {
              return <option key={type.key}>{type.key}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
