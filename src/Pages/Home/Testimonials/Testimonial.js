import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, location, userReview } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="mt-8">
                    <div className="flex items-center">
                        <div className="w-16 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <h4>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;