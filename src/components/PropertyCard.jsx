import React from 'react';
import '../index.css';
import PeopleIcon from '../assets/User_alt_duotone.svg';
import HomeIcon from '../assets/Home_duotone.svg';
import StarIcon from '../assets/Starfill.svg';

export default function PropertyCard({
    id,
    title,
    description,
    price,
    rating,
    superhost,
    location,
    capacity,
    image
}) {
    return (
        <div className="card">
            <img src={image} alt={title} className='card-img' />
            <div className={superhost === true ? "superhost" : "hidden"}>
                <p>Superhost</p>
                <img src={StarIcon} alt="" className='superhost-img' />
            </div>
            <div className="content">
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
            <div className="capacity">
                <div className="capacity-bedroom">
                    <img src={HomeIcon} alt="Bedrooms" className='bedroom-icon' />
                    {capacity.bedroom} bedroom
                </div>
                <div className="capacity-people">
                    <img src={PeopleIcon} alt="Guests" className='people-icon' />
                    {capacity.people} guests
                </div>
            </div>
            <div className="separator-line"></div>
            <div className="footer">
                <div className="price">${price}/night</div>
                <div className="rating">
                    <img src={StarIcon} alt="Star" className='star-icon' />
                    {rating}
                </div>
            </div>
            </div>
        </div>
    );
}