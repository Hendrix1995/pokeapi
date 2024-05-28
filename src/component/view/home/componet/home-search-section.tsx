"use client";

import { POKEMON_TYPES } from "@/script/const/pokemon-types";
import React, { useCallback, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type");
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClickSearch = (targetText: string) => {
    router.push(`${pathname}?search=${targetText}`, { scroll: false });
    window.scrollTo({ top: 410, behavior: "smooth" });
  };

  const handleOnChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "reset") {
      router.replace("/?page=1");
    } else {
      router.push(`${pathname}?page=1&type=${e.target.value}`, { scroll: false });
      window.scrollTo({ top: 410, behavior: "smooth" });
    }
  };

  const handleClickClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    router.replace("/?page=1");
  };

  return (
    <div className='w-full text-white bg-[#313131] p-4 rounded-8'>
      <h1>Search</h1>

      <div className='flex flex-col gap-2'>
        <div>
          <h2>name</h2>

          <div className='flex gap-2'>
            <input
              ref={inputRef}
              className='w-full max-w-[420px] p-2 text-[#313131] rounded-4'
              onChange={(e) => handleOnChange(e)}
              onKeyDown={(e) => e.code === "Enter" && handleClickSearch(searchText)}
            />
            <button className='bg-white text-[#313131] px-2 rounded-4' onClick={() => handleClickSearch(searchText)}>
              search
            </button>
            <button className='bg-white text-[#313131] p-2 rounded-4' onClick={() => handleClickClear()}>
              clear
            </button>
          </div>
        </div>

        <div>
          <h2>type</h2>
          <select
            className='w-full max-w-[420px] p-2 text-[#313131] rounded-4'
            value={currentType || ""}
            onChange={(e) => handleOnChangeType(e)}
          >
            {POKEMON_TYPES.map((type) => {
              return (
                <option key={type.key} value={type.value}>
                  {type.key}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
