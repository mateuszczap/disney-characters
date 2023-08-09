export const HomePage = () => {
    return (
    <div>
        <div className="mainContainerFavorite">
            <h1>Most popular Disney Characters</h1>
            <div className="containerFavoriteTiles">
                <div className="favoriteTile">
                    <div>
                        <img src="/logo192.png" className="favoriteTileImg"/>
                    </div>
                    <div className="mainTile">
                            <div className="characterNameTile">
                                <div>Character name</div>
                                <div>Star</div>
                            </div>
                        <div>Films:</div>
                        <div>TV Shows:</div>
                    </div>
          
                    {/* character name */}
                    {/* star  */}
                    {/* films - ilosc*/}
                    {/* Tv shows - ilość */}
                </div>
            </div>
        </div>

    </div>)
}