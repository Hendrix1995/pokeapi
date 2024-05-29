"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import useSWR from "swr";
import Card from "./home-card";
import { TYPE_URL } from "@/script/model/config";
import { useRouterPush } from "@/script/hook/useRouterHook";

type Props = {};

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

  const { push: pushType } = useRouterPush({ prams: [{ key: "type", value: currentType || "reset" }] });

  useEffect(() => {
    data && pushType();
  }, [currentType, data, pushType, router]);

  return (
    !isLoading &&
    data?.pokemon.map((pokemonRes: { pokemon: { name: string } }) => {
      return <Card key={pokemonRes.pokemon.name} value={pokemonRes.pokemon.name} />;
    })
  );
}

export default HomeTypeCard;
