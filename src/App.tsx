import { PokemonTable } from "./components/pokemonTable";
import { SearchPokemon } from "./components/searchPokemon";

export type Pokemon = {
  id: number;
  name: string;
};

function App() {
  return (
    <>
      <SearchPokemon />
      <PokemonTable />
    </>
  );
}

export default App;
