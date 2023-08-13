import { Star } from "./Star";
import { TvIcon } from "../components/TvIcon";

export const CharacterList = (props) => {
    return (
        <div className="characterList">
            <h2>Disney Characters</h2>
            <div className="characterListTitles">
                <h4>Picture</h4>
                <h4>Name</h4>
                <h4>Films count</h4>
                <h4>Favorite</h4>
            </div>
            <div>{props.list?.map((character) => {
                return (
                    <div className="characterListTitles" key={character._id}>
                        <div>
                            <img src={character.imageUrl} className="characterListImg" />
                        </div>
                        <div className="tvIconContainer">{character.name}{character.tvShows.length ? <TvIcon tvShows={character.tvShows} id={character._id}/> : undefined}</div>
                        <div>{character.films.length}</div>
                        <div onClick={() => {

                            const isExist = props.favoriteCharacters.find((favoriteCharacter) => favoriteCharacter._id === character._id)
                            if (isExist) {
                                const newFavoriteCharacters = props.favoriteCharacters.filter((favoriteCharacter) => favoriteCharacter._id !== character._id)
                                props.setFavoriteCharacters(newFavoriteCharacters)
                                return
                            }
                            props.setFavoriteCharacters((prev) => {
                                return [...prev, character]
                            })
                        }}>
                            <Star isFilled={!!props.favoriteCharacters.find((favoriteCharacter) => favoriteCharacter._id === character._id)} />
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )
};