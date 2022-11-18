import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext)
    const appointmentDate = format(selectedDate, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            treatment: name,
            appointmentDate,
            slot,
            patientName,
            email,
            phone
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Appointment successfully booked.', {
                        duration: 8000
                    })
                    refetch();
                    setTreatment(null);
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  dark:bg-slate-600 dark:text-slate-900">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={appointmentDate} className="input input-bordered input-md w-full mb-4 text-base" disabled />
                        <select name='slot' className="select select-bordered select-md w-full mb-4 text-base" defaultValue={'Select a time slot'}>
                            {/* <option disabled value='Default'>Select a time slot</option> */}
                            {
                                slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered input-md w-full mb-4 text-base" />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-md w-full mb-4 text-base" required readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-md w-full mb-4 text-base" />
                        <input type="submit" value="Submit" className='btn btn-sm w-full h-12 text-white' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;