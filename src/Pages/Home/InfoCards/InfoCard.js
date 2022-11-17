import React from 'react';

const InfoCard = ({ card }) => {
    const { name, icon, description, bgClass} = card;
    return (
        <div className={`card card-side flex-col md:flex-row shadow-xl px-6 text-white ${bgClass}`}>
            <figure><img className='w-20 md:w-full mt-5' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{ description }</p>
            </div>
        </div>
    );
};

export default InfoCard;