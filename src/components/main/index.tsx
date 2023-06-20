import { useEffect, useState } from "react";
import { Detail, Pokemon } from "../../interfaces/pokemon";
import { getPokemons, getPokemonsDetails } from "../../services/pokeapi";
import PokeCard from "../card";

export default function Main() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 10;

  const fetchPokemos = async () => {
    let listPokemons: Detail[] = await getPokemons(limit, offset);
    // Mapeamos cada pokemon a una promesa que se resuelve a los detalles de ese pokemon
    let pokemonPromises: Promise<Pokemon>[] = listPokemons.map((pkm) =>
      getPokemonsDetails(pkm.url)
    );
    // Esperamos a que todas las promesas se resuelvan
    let _pokemons: Pokemon[] = await Promise.all(pokemonPromises);

    setPokemons(prevPokemons  => [...prevPokemons, ..._pokemons]);
  };

  useEffect(() => {
    fetchPokemos();
  }, [offset]);

  const renderPokemons = () =>
    pokemons?.map((v, i) => <PokeCard data={v} key={i}></PokeCard>);

 const onclickButton = () => setOffset(prevOffset => prevOffset + limit)
  return (
    <div>
      <div
        style={{
          marginTop: 10,
          display: "grid", 
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {renderPokemons()}
      </div>
      <button className="button" onClick={onclickButton}>Siguientes</button>
    </div>
  );
}
