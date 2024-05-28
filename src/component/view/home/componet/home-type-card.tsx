"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";
import Card from "./home-card";

type Props = {};

const TYPE_URL = "https://pokeapi.co/api/v2/type";

const getPokemonType = async (type: string) => {
  try {
    const response = await fetch(`${TYPE_URL}/${type}`);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error();
  }
};

function HomeTypeCard({}: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const currentType = params.get("type");

  const { data, isLoading } = useSWR([TYPE_URL, currentType], () => getPokemonType(currentType as string));

  useEffect(() => {
    data && router.push(`/?type=${currentType}`, { scroll: false });
  }, [currentType, data, router]);

  return (
    !isLoading &&
    data.pokemon.map((pokemonRes: { pokemon: { name: string } }) => {
      return <Card key={pokemonRes.pokemon.name} value={pokemonRes.pokemon.name} />;
    })
  );
}

export default HomeTypeCard;
