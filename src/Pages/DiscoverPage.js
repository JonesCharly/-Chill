import React, {Component} from 'react';
import './DiscoverPage.css';

class DiscoverPage extends Component {

    render() {
        return (
            <div>
                <h2>Découvrir</h2>

                <div className="navbar">
                    <input placeholder="recherche"></input>
                    <select>
                        <option>genre</option>
                    </select>
                    <select>
                        <option>type</option>
                    </select>
                </div>

                <h4>Tendances Actuelles</h4>
                <div className="gallery">
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                        <div className="card">
                            <img alt="moviePicture"></img>
                            <h5>La casa de Papel</h5>
                            <p className="genreText">genres</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default DiscoverPage ;