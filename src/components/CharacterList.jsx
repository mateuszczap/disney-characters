export const CharacterList = (props) => {
return (
    <div>
        <h2>Disney Characters</h2>
        <div>{props.list.map((character) => {
        return (
            <>
                <div>{character.imageUrl}</div>
                <div>{character.name}</div>
                <div>{character.films.length}</div>
                <div>Favorite(star)</div>
            </>
        )
    })}</div>
    </div>
)
};

{/* <img src={props.imageUrl} className="favoriteTileImg"/> */}