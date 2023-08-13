import { FavoriteCharacter } from "../components/FavoriteCharacter";
import { SearchCharacters } from "../components/SearchCharacters";
import { CharacterList } from "../components/CharacterList";
import { MyFavorite } from "../components/MyFavorite";
import { useState } from "react";
import useSWR from "swr";
import { Star } from "../components/Star";
import { useNavigate } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());
export const HomePage = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { data, isLoading } = useSWR(
    `https://api.disneyapi.dev/character?pageSize=100&name=${name}`,
    fetcher
  );
  return (
    <main className="mainHomePage">
      <div className="headerContainer">
        <img  className="disneyLogo" src="/Walt Disney mickey logo.png"/>
        <div className="headerMyFavorite" onClick={() => {
          navigate("/my-favorite-page");
        }}>MY FAVORITE<Star isFilled /></div>
      </div>
      <div className="mainContainerFavorite">
        <h1 className="header">Most popular Disney</h1>
        <h1 className="header">Characters</h1>
        <div className="containerFavoriteTiles">
          {data?.data.sort((prev, next) => {
    if (prev.films.length > next.films.length) {
      return -1;
    }
    return 0;
    
  }).slice(0, 3).map((character) => {
            return <FavoriteCharacter 
            key={character._id} 
            name={character.name} 
            films={character.films} 
            tvShows={character.tvShows} 
            imageUrl={character.imageUrl} />
          })}

        </div>
      </div>
      <SearchCharacters setName={setName} />
      <div className="charactersAndFavorite">

        <CharacterList list={data?.data || []} favoriteCharacters={props.favoriteCharacters} setFavoriteCharacters={props.setFavoriteCharacters}  />

        <MyFavorite list={props.favoriteCharacters} />
        
      </div>
      <div className="footerButton">
        <button className="button" onClick={() => {
          window.open("https://github.com/mateuszczap", '_blank')
        }}>Go to My GitHub</button>
      </div>

    </main>)

}

