export const CharacterList = (props) => {
return (
    <div className="characterList">
        <h2>Disney Characters</h2>
        <div className="characterListTitles">
            <h3>Picture</h3>
            <h3>Name</h3>
            <h3>Films count</h3>
            <h3>Favorite</h3>
        </div>
        <div>{props.list.map((character) => {
        return (
            <div className="characterListTitles">
            <div>{character.imageUrl}</div>
            <div>{character.name}</div>
            <div>{character.films.length}</div>
            <div>star</div>
            </div>
        )
    })}</div>
    </div>
)
};