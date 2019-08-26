import React from 'react';
import '../Pages/DiscoverPage.css';

const DiscoverCard = ({ name, image }) => {
    return (
        <div className="card">
            <img src={image} alt="moviePicture"></img>
            <h5>{name}</h5>
            <p className="genreText">genres</p>
        </div>
    )
}

export default DiscoverCard;