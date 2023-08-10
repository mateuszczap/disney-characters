export const MyFavorite = (props) => {
    return (
        <div className="favoriteList">
            <h2>My Favorite, star</h2>
            <div>{props.list.map((character) => {
                return (
                    <div>{character.name}</div>
                )
            })}</div>
        </div>
    )
}