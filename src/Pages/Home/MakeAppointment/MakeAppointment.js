import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <div className="hero mt-32" style={{background: `url(${appointment})`}}>
            <div className="hero-content flex-col pb-0 lg:flex-row">
                <img src={doctor} alt='appointment' className="hidden md:block lg:w-1/2 -mt-24 rounded-lg shadow-2xl" />
                <div>
                    <h4 className='text-primary font-bold'>Appointment</h4>
                    <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Appointment</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;