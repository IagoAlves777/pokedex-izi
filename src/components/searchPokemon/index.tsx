import { AxiosResponse } from "axios";
import { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import ServiceAPI from "../../services/serviceAPI";
import { InfoPokemon } from "../infoPokemon";
import * as C from "./styles";

export const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState("snorlax");
  const [pokemonInfo, setPokemonInfo] = useState<
    boolean | AxiosResponse<any, any>
  >();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const showInfoPokemon = async () => {
    setLoading(true);
    const response = await ServiceAPI.getPokemonByName(pokemonName);
    if (response === true) {
      setLoading(false);
      setError(true);
      return;
    }
    setPokemonInfo(response);
    setShow(true);
    setError(false);
  };
  return (
    <C.Container>
      <div className="div_search">
        <Form.Control
          type="text"
          placeholder="Buscar pokémon"
          size="lg"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          isInvalid={error}
        />
        <Button variant="light" onClick={() => showInfoPokemon()}>
          Buscar
        </Button>
        <InfoPokemon
          show={show}
          setShow={setShow}
          pokemonInfo={pokemonInfo}
          setLoading={setLoading}
        />
      </div>
      {loading && !error && <Spinner animation="border" variant="light" />}
      {error && !loading && <h4>Erro ao buscar pokémon</h4>}
    </C.Container>
  );
};
