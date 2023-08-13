export const FavoriteCharacter = (props) => {
    
    return (

        <div className="favoriteTile">
            <div>
                <img src={props.imageUrl} className="favoriteTileImg" />
            </div>
            <div className="mainTile">
                <div className="characterNameTile">
                    <div className="name">{props.name}</div>
                    {/* <div>star</div> */}
                </div>
                <div>Films:{props.films.length}</div>
                <div>TV Shows:{props.tvShows.length}</div>
            </div>
        </div>

    )
};
