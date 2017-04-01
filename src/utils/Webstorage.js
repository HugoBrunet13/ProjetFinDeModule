

export function getDataFilm() {
    return JSON.parse( localStorage.getItem( "TabFilms" ) )
}

export function addFilmByName( film ) {
    var tab = getDataFilm() || []
    tab.push( film )
    tab.push()
    localStorage.setItem( "TabFilms", JSON.stringify( tab ) )
}

export function addFilmByID( id ) {
    var tab = getDataFilm() || []
    tab.push( id )
    localStorage.setItem( "TabFilms", JSON.stringify( tab ) )
}

