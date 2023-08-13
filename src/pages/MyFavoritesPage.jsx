import { MyFavorite } from "../components/MyFavorite"

export const MyFavoritesPage = (props) => {
    
    return <div className="myFavoritePage"><MyFavorite list={props.favoriteCharacters} /></div>
}