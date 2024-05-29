import { DEFAULT_URL } from "@/script/model/config";
import getTypeColor from "@/script/util/services-util";
import Image from "next/image";
import React from "react";

type InfoProps = { id: string };

interface TypeResponse {
  type: { name: string };
}

interface StatsResponse {
  stat: { name: string };
  base_stat: string;
}

async function getPokemon<PokemonResponse>(id: string) {
  try {
    const response = await fetch(`${DEFAULT_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error();
  }
}

export default async function Info({ id }: InfoProps) {
  const pokemon = await getPokemon(id);

  return (
    <section className='flex justify-center items-center gap-8 flex-wrap'>
      <div className='flex flex-col items-start gap-2'>
        <h1 className='w-full text-center p-4 bg-slate-200 rounded-8'>{pokemon.name}</h1>
        <div className='flex items-center flex-wrap gap-2 max-w-[360px]'>
          {pokemon.types.map((typeEl: TypeResponse) => {
            return (
              <p
                className='text-[20px] text-white rounded-12 px-3'
                key={typeEl.type.name}
                style={{ backgroundColor: getTypeColor(typeEl.type.name) }}
              >
                {typeEl.type.name}
              </p>
            );
          })}
        </div>
        <Image
          className='bg-[#D9D9D9] rounded-8'
          width={360}
          height={360}
          src={pokemon.sprites?.front_default ?? ""}
          alt={pokemon.name}
        />
      </div>

      <div className='flex flex-col items-start'>
        {pokemon.stats.map((statEl: StatsResponse) => {
          return <p className='text-[24px]' key={statEl.stat.name}>{`${statEl.stat.name} : ${statEl.base_stat}`}</p>;
        })}
      </div>
    </section>
  );
}
