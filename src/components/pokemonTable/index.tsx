import { Pagination } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { Table, Card } from "react-bootstrap";
import ServiceAPI from "../../services/serviceAPI";
import { Pokemon } from "../../App";
import * as C from "./styles";

export const PokemonTable = () => {
  const count = 113;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    const getPokemons = async function (offSet: number, limit: number) {
      const response = await ServiceAPI.getPokemons(offSet, limit);
      const auxPokemons: SetStateAction<Pokemon[]> = [];
      response.data.results.map((pokemon: any, index: number) => {
        auxPokemons.push({
          id: index + 1 + offSet,
          name: pokemon.name,
        });
      });
      setPokemons(auxPokemons);
    };
    if (page > 1) {
      getPokemons((page - 1) * 10, limit);
    } else {
      getPokemons(0, limit);
    }
  }, [page]);
  return (
    <C.Container>
      <Card>
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <tr>
                <td style={{ width: "80px" }}>{pokemon.id}</td>
                <td>{pokemon.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination
          count={count}
          onChange={(event, value) => setPage(value)}
          showFirstButton
          showLastButton
        />
      </Card>
    </C.Container>
  );
};
