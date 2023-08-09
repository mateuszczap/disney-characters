export const FavoriteCharacter = (props) => {
    console.log(props)
    return (
    
                <div className="favoriteTile">
                    <div>
                        <img src={props.imageUrl} className="favoriteTileImg"/>
                    </div>
                    <div className="mainTile">
                            <div className="characterNameTile">
                                <div>{props.name}</div>
                                <div>star</div>
                            </div>
                        <div>Films:{props.films.length}</div>
                        <div>TV Shows:{props.tvShows.length}</div>
                    </div>
          
                    {/* character name */}
                    {/* star  */}
                    {/* films - ilosc*/}
                    {/* Tv shows - ilość */}
                </div>
            
            )
}