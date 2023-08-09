import { FavoriteCharacter } from "../components/FavoriteCharacter"

export const HomePage = () => {
    return (
    <div>
        <div className="mainContainerFavorite">
            <h1>Most popular Disney Characters</h1>
            <div className="containerFavoriteTiles">
            <FavoriteCharacter/>
            <FavoriteCharacter/>
            <FavoriteCharacter/>
            </div>
        </div>

    </div>)
}