export interface TypeResponse {
  type: { name: string };
}

export interface PokemonResponse {
  pokemon: {
    id: string;
    name: string;
    sprites: {
      front_default: string;
    };
    types: TypeResponse[];
  };
}
