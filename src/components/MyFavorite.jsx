import { Star } from "./Star";
export const MyFavorite = (props) => {
    return (
        <div className="favoriteList">
            <div className="myFavoriteAndStar">
                <h2>My Favorite</h2>
                <div className="starIcon"><Star isFilled /></div>
            </div>
            <h4>Name</h4>
            <div>{props.list.map((character) => {
                return (
                    <div key={character._id}>{character.name}</div>
                )
            })}</div>
        </div>
    )
}