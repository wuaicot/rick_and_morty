import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
    //console.log(useParams());
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      console.log(character);

    return (
        <div>
            <Link to="/home">
                <button>Go Back</button>
            </Link>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            {character.origin && <h3>{character.origin.name}</h3>}
        </div>
    )
}

// {char.origin && <h2>{char.origin.name}</h2>}