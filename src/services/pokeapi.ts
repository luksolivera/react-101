import { ListResponse, Detail, Pokemon } from "../interfaces/pokemon";

const BASE_URL: string = "https://pokeapi.co/api/v2"

export const getPokemons = async (limit : number, offset: number) : Promise<Detail[]> => {
    const url = `${BASE_URL}/pokemon?limit=${limit}&&offset=${offset}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data: ListResponse = await response.json();
    return data.results;
}

export const getPokemonsDetails = async (url: string): Promise<Pokemon> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data: Pokemon = await response.json();
    return data
}