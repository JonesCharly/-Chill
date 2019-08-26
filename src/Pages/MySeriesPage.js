import React, {Component} from 'react';
import './MySeriesPage.css'

class MySeriesPage extends Component {



    render() {


       

        return (
            <div className="mySeriesPage">

                <h2>Mes séries</h2>

                <div className="navbar">
                    <input placeholder="recherche"></input>
                    <select>
                        <option>genre</option>
                    </select>
                    <select>
                        <option>type</option>
                    </select>
                </div>

                <h4>Mes series en cours</h4>

                <div className="seriesGallery">
                    <div className="cardBlk">
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                        <div>
                            <p>Saison 1</p>
                        </div>
                    </div>
            

                </div>
            </div>
        )
    }
}

export default MySeriesPage ;