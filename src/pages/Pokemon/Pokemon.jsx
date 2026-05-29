import "./Pokemon.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
  //declaration de states pour la gestion des erreurs et la reponse API
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

        // console.log("ici le loggggg", response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <main className="container">
      <h1 className="pokemon-page-title">Pokemons</h1>
      <section className="pokemons-section">
        {data.results.map((element) => {
          const id = element.url.split("/")[6];
          return (
            <Link to={`/pokemon/${element.name}`} key={element.name}>
              <article className="pokemon-article">
                <div>{element.name}</div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt="pokemon picture"
                />
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Pokemon;
