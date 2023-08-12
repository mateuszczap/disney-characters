import { FavoriteCharacter } from "../components/FavoriteCharacter";
import { SearchCharacters } from "../components/SearchCharacters";
import { CharacterList } from "../components/CharacterList";
import { MyFavorite } from "../components/MyFavorite";
import { useState } from "react";
import useSWR from "swr";
import { Star } from "../components/Star";

const fetcher = (url) => fetch(url).then((res) => res.json());
export const HomePage = () => {
  const [name, setName] = useState("");
  const { data, isLoading } = useSWR(
    `https://api.disneyapi.dev/character?pageSize=100&name=${name}`,
    fetcher
  );
  // console.log(data?.data)
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  return (
    <main className="mainHomePage">
      <div className="headerContainer">
        <div>DISNEY</div>
        <div className="headerMyFavorite">MY FAVORITE<Star isFilled /></div>
      </div>
      <div className="mainContainerFavorite">
        <h1 className="header">Most popular Disney</h1>
        <h1 className="header">Characters</h1>
        <div className="containerFavoriteTiles">
          {data?.data.sort((prev, next) => {
    if (prev.films.length < next.films.length) {
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

        <CharacterList list={data?.data || []} favoriteCharacters={favoriteCharacters} setFavoriteCharacters={setFavoriteCharacters}  />

        <MyFavorite list={favoriteCharacters} />
        
      </div>

    </main>)

}

const array = [
  {
    "_id": 6,
    "films": [],
    "shortFilms": [],
    "tvShows": [],
    "videoGames": [],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/%27Olu_Mel",
    "name": "'Olu Mel",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png",
    "createdAt": "2021-04-12T01:25:09.759Z",
    "updatedAt": "2021-12-20T20:39:18.031Z",
    "url": "https://api.disneyapi.dev/characters/6",
    "__v": 0
  },
  {
    "_id": 7,
    "films": [],
    "shortFilms": [],
    "tvShows": [
      "Gravity Falls"
    ],
    "videoGames": [],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/.GIFfany",
    "name": ".GIFfany",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
    "createdAt": "2021-04-12T01:25:10.354Z",
    "updatedAt": "2021-12-20T20:39:18.032Z",
    "url": "https://api.disneyapi.dev/characters/7",
    "__v": 0
  },
  {
    "_id": 10,
    "films": [],
    "shortFilms": [],
    "tvShows": [
      "Lilo & Stitch: The Series",
      "Stitch!"
    ],
    "videoGames": [
      "Disney Tsum Tsum (game)"
    ],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/627",
    "name": "627",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png",
    "createdAt": "2021-04-12T01:25:58.961Z",
    "updatedAt": "2021-12-20T20:39:18.032Z",
    "url": "https://api.disneyapi.dev/characters/10",
    "__v": 0
  },
]