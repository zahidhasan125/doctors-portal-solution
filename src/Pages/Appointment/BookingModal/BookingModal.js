import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-8">{name}</h3>
                    <input type="text" value={date} className="input input-bordered input-md w-full mb-6 text-base" disabled />
                    <select className="select select-bordered select-md w-full mb-6 text-base" defaultValue={'Default'}>
                        <option disabled value='Default'>Select a time slot</option>
                        {
                            slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" placeholder="Full Name" className="input input-bordered input-md w-full mb-6 text-base" />
                    <input type="text" placeholder="Phone Number" className="input input-bordered input-md w-full mb-6 text-base" />
                    <input type="email" placeholder="Email" className="input input-bordered input-md w-full mb-6 text-base" />
                    <input type="submit" value="Submit" className='btn btn-sm w-full h-12 text-white' />
                </div>
            </div>
        </>
    );
};

export default BookingModal;