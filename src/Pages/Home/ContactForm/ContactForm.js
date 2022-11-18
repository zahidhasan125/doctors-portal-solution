import React from 'react';
import contactBg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';

const ContactForm = () => {
    return (
        <section className="hero my-20" style={{ background: `url(${contactBg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <form className="card flex-shrink-0 w-full shadow-2xl">
                    <h5 className='text-primary font-bold text-center'>Contact Us</h5>
                    <h2 className='text-white text-4xl text-center'>Stay connected with us</h2>
                    <div className="card-body dark:text-slate-900">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <PrimaryBtn>Submit</PrimaryBtn>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;