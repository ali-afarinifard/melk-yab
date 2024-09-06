import React from 'react'

// ** Styles
import "./PropertyCard.scss"

// ** lodash
import { truncate } from 'lodash'

// ** React Router
import { useNavigate } from 'react-router-dom'

// ** Components
import Heart from '../Heart/Heart.jsx'

const PropertyCard = ({ card }) => {
    const navigate = useNavigate()

    return (
        <div className="flexColStart r-card"
            onClick={() => navigate(`../properties/${card.id}`)}
        >
            <img src={card.image} alt="home" />

            <Heart id={card?.id} />

            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
            <span className="secondaryText">{truncate(card.description, { length: 80 })}</span>
        </div>
    )
}

export default PropertyCard