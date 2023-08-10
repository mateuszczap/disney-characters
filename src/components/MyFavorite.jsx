export const MyFavorite = (props) => {
    return (
        <div>
            <h2>My Favorite, star</h2>
            <div>{props.list.map((character) => {
                return (
                    character.name
                )
            })}</div>
        </div>
    )
}