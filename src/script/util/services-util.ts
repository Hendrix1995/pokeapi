import { POKEMON_TYPES } from "../const/pokemon-types";

export default function getTypeColor(typeValue: string) {
  return POKEMON_TYPES.find((type) => type.value === typeValue)?.color;
}
