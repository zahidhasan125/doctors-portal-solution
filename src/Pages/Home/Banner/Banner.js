import React from 'react';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';
import img from './../../../assets/images/bg.png'
import chair from './../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='hero' style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-extrabold w-5/4">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;