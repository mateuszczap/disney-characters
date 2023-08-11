export const SearchCharacters = (props) => {

    return (
        <div className="searchCharacterContainer">
            <img src="/Disney LOGO.png" />
            <div className="searchContainer">
                <p className="p1">List of {100} Disney Characters with own Tv Shows</p>
                <p className="p2">The Best Animated Disney Characters of All Time</p>
                <input placeholder="Search Character..." className="input" onChange={(e) => props.setName(e.target.value)} />
            </div>

        </div>
    )
};