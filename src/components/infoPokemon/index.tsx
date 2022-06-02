import { Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "react-bootstrap";
import * as C from "./styles";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  // @ts-expect-error
  pokemonInfo: Pokemon;
};

export const InfoPokemon = ({ show, setShow, pokemonInfo }: Props) => {
  return (
    <>
      {pokemonInfo === undefined ? (
        <></>
      ) : (
        <C.Container>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                {pokemonInfo.data.name.toUpperCase()} #{pokemonInfo.data.id}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <C.Content>
                <div className="laft_side">
                  <img
                    src={pokemonInfo.data.sprites.front_default}
                    alt="pokemonImg"
                  />
                  <div className="info">
                    <div>
                      <h2 className="info_title">Altura</h2>
                      <h2 className="info_content">
                        {pokemonInfo.data.height / 10} m
                      </h2>
                    </div>
                    <div>
                      <h2 className="info_title">Peso</h2>
                      <h2 className="info_content">
                        {pokemonInfo.data.weight / 10} kg
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="abilities">
                  <h2 className="info_title">Habilidades</h2>
                  {pokemonInfo.data.abilities.map((kind: any) => (
                    <h2 className="info_content">{kind.ability.name}</h2>
                  ))}
                </div>
                <div className="type">
                  <h2 className="info_title">Tipo</h2>
                  {pokemonInfo.data.types.map((kind: any) => (
                    <h2 className="info_content">{kind.type.name}</h2>
                  ))}
                </div>
              </C.Content>
            </Modal.Body>
          </Modal>
        </C.Container>
      )}
    </>
  );
};
