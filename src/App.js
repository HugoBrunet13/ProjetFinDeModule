/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const APP_TITLE = 'Hugo BRUNET ~ Tristan NICOLAIDES'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import FilmCard from './components/FilmCard'
import { getDataFilm, addFilmByName, addFilmByID } from './utils/Webstorage'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            film: undefined,
            filmname: '',
            id: undefined,
            idname: ''
        }
    }


    handleChange = ( event ) => {
        this.setState( {
            filmname: event.target.value
        } )
    }
    handleChange2 = ( event ) => {
        this.setState( {
            idname: event.target.value
        } )
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>
                <div id="presentation">
                    TD Final - Film APP
                </div>

                <div className="App-content">
                    <div className="center-align">
                        
                        <input id="film" class="couleur" placeholder='Saisissez le nom du film' type="text" value={ this.state.filmname } onChange={ this.handleChange } margin='center' />
                        <button onClick={ this.GetDataByFilm } className="waves-effect waves-light btn">
                            Film
                        </button>
                        <input id="id" placeholder='Saisissez ID du film     Exemple tt1285016' type="text" value={ this.state.idname } onChange={ this.handleChange2 } margin='center' />
                        <button onClick={ this.GetDataByID } className="waves-effect waves-light btn">
                            ID
                        </button>
                        <br />
                        <br />


                    </div>
                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.AfficherInfoFilm() }
                            { this.AfficherInfoID() }
                        </div>
                    </div>
                </div>
            </div >


        )
    }

    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    GetDataByFilm = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const film = await get( ENDPOINTS.FILM_API_URL + 't=' + this.state.filmname.replace( ' ', '+' ) + '+&plot=full', {
            } )
            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            console.log(film)
            addFilmByName( film )
            this.setState( {
                film
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }
    GetDataByID = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const id = await get( ENDPOINTS.FILM_API_URL + 'i=' + this.state.idname, {
            } )

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
            addFilmByID( id )
            this.setState( {
                id
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }

    AfficheTab() {
        if ( getDataFilm() ) {
            return getDataFilm().map( film => {

                return <FilmCard data={ film } />
            } )
        }
        return null
    }





    //handle display of the received weather object
    AfficherInfoFilm = () => {
        const film = this.state.film

        if ( film ) {
            return (
                <FilmCard data={ film } />
            )
        }
        return null
    }
    AfficherInfoID = () => {
        const id = this.state.id

        if ( id ) {
            return (
                <FilmCard data={ id } />
            )
        }
        return null
    }




}

export default App
