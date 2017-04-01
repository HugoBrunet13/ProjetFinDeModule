import React, { Component } from 'react'

import './FilmCard.css'

class FilmCard extends Component 
{
    render() 
    {

        const film = this.props.data
        if (film.Response ==="False")
        {
            return(
                <div className="card horizontal" style={ { margin: 'auto' } }>
                    MOVIE NOT FOUND! please check the data entry
                </div>
            )
        }
        else
        {
            return (
                <div className="card horizontal" style={ { margin: 'auto' } }>
                    <div className="card-image">
                        <img alt="Poster" src={ film.Poster } />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="film-data">
                                <h3>{ film.Title }</h3>
                                <p>
                                    <i className="material-icons">info</i>
                                        <span>Actors: { film.Actors }</span>
                                </p>
                                <p>
                                    <i className="material-icons">info</i>
                                    <span>Released: { film.Released } </span>
                                </p>
                                <p>
                                    <i className="material-icons">info</i>
                                    <span>Runtime: { film.Runtime }</span>
                                </p>
                                <p>
                                    <i className="material-icons">info</i>
                                    <span>Director: { film.Director }</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default FilmCard