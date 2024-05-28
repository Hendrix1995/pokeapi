import getTypeColor from "@/script/util/pokemon-get-type-color";
import Image from "next/image";
import React from "react";

type Props = { id: string };

interface TypeResponse {
  type: { name: string };
}

interface StatsResponse {
  stat: { name: string };
  base_stat: string;
}

const URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon<PokemonResponse>(id: string) {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error();
  }
}

export default async function Info({ id }: Props) {
  const pokemon = await getPokemon(id);

  return (
    <div>
      <p>{pokemon.name}</p>
      <Image width={138} height={138} src={pokemon.sprites.front_default ?? ""} alt={pokemon.name} />
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
      {pokemon.stats.map((statEl: StatsResponse) => {
        return (
          <div key={statEl.stat.name}>
            <p>{`${statEl.stat.name} : ${statEl.base_stat}`}</p>
          </div>
        );
      })}
    </div>
  );
}
