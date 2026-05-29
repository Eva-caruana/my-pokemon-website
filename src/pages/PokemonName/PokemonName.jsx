import { useEffect, useState } from "react";
import "./PokemonName.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonName = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { nomdupokemon } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${nomdupokemon}`,
        );

        setData(response.data);
        setIsLoading(false);
        console.log("ici le log rep=>", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <main className="container">
      <section className="one-pokemon-page">
        <article className="pokemon-info">
          <div className="left-side-info">
            <img src={data.sprites.front_default} alt="pokemon picture" />
            <div>{data.name}</div>
          </div>
          <div className="right-side-info">
            <div className="elements-container">
              {data.types.map((element) => {
                //pokemon types
                return <div className="pokemon-types">{element.type.name}</div>;
              })}
            </div>
            <div className="elements-container">
              {data.abilities.map((element) => {
                //pokemon abilities
                return (
                  <div className="pokemon-abilities">
                    {element.ability.name}
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PokemonName;
