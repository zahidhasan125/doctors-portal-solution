import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import ServiceCard from './ServiceCard';
import treatment from '../../../assets/images/treatment.png';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluoride,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='text-center mt-24'>
            <p className='text-xl text-secondary font-bold'>OUR SERVICES</p>
            <h3 className='text-4xl'>Services We Provide</h3>
            <div className='grid grid-cols-1 my-20 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="hero container">
                <div className="flex flex-col lg:flex-row lg:justify-center">
                    <img src={treatment} className="lg:w-1/3 rounded-lg shadow-2xl" alt='treatment' />
                    <div className='lg:w-1/2 font-bold mt-32 px-14 text-start'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <div className='flex flex-start'>
                            <PrimaryBtn>Get Started</PrimaryBtn>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;