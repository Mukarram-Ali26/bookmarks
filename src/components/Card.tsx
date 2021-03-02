import React from 'react'
import './Card.css'
const Card = ({ title, url }) => {
    return (
        <div className="card">
           
            <h2>{title}</h2>
            <br />

            <h2>{url}</h2>
        </div>
    )
}

export default Card
