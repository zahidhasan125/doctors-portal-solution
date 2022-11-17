import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const appointmentDate = format(selectedDate, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.email.value;
        const info = {
            treatment: name,
            appointmentDate,
            slot,
            patientName,
            email,
            phone
        }
        console.log(info);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-8">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={appointmentDate} className="input input-bordered input-md w-full mb-6 text-base" disabled />
                        <select name='slot' className="select select-bordered select-md w-full mb-6 text-base" defaultValue={'Default'}>
                            <option disabled value='Default'>Select a time slot</option>
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-md w-full mb-6 text-base" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-md w-full mb-6 text-base" required/>
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-md w-full mb-6 text-base" />
                        <input type="submit" value="Submit" className='btn btn-sm w-full h-12 text-white' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;