"use client";

import { TypeResponse } from "@/script/type/response-pokemon";
import getTypeColor from "@/script/util/pokemon-get-type-color";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";

interface CardProps {
  value: string | number;
}

const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async (value: number | string) => {
  if (typeof value === "number" && Number(value) < 0) return;

  try {
    const response = await fetch(`${DEFAULT_URL}/${value}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error();
  }
};

export default function Card({ value }: CardProps) {
  const { data: pokemon, isLoading } = useSWR([DEFAULT_URL, value], () => getPokemon(value));

  return (
    <li className='flex flex-col items-start gap-2 shadow-m p-2 rounded-12 cursor-pointer'>
      {isLoading ? (
        <div className='flex flex-col gap-2'>
          <div className='rounded-8 bg-[#D9D9D9] w-[138px] h-[138px]' />
          <div className='rounded-8 bg-[#D9D9D9] w-[138px] h-[64px]' />
        </div>
      ) : (
        <Link href={`/${pokemon.id}`}>
          <div className='rounded-8 bg-[#D9D9D9]'>
            <Image width={138} height={138} src={pokemon.sprites.front_default ?? ""} alt={pokemon.name} />
          </div>

          <div>
            <p>{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
          </div>

          <div className='flex items-center flex-wrap gap-2 max-w-[160px]'>
            {pokemon.types.map((typeEl: TypeResponse) => {
              return (
                <p
                  className='text-white rounded-12 px-3'
                  key={typeEl.type.name}
                  style={{ backgroundColor: getTypeColor(typeEl.type.name) }}
                >
                  {typeEl.type.name}
                </p>
              );
            })}
          </div>
        </Link>
      )}
    </li>
  );
}
