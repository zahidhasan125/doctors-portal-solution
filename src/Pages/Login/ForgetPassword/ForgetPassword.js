import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ForgetPassword = () => {
    const { forgetPassword } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleResetPassword = (data) => {
        forgetPassword(data.email)
            .then(() => {
                toast.success("Email Send, please check INBOX & SPAM folder also.", { duration: 10000 })
            })
            .catch(err => {
                toast.error(err.message.split('/')[1].slice(0, -2), {duration: 8000})
            })
    }
    return (
        <div className='h-[480px] flex flex-col justify-center items-center'>
            <div className='w-96 p-6 dark:bg-slate-800 rounded-xl'>
                <h2 className='text-xl font-bold text-center'>Forget Password</h2>
                <form onSubmit={handleSubmit(handleResetPassword)}>
                    <div className="form-control w-full dark:text-black ">
                        <label className="label"><span className="label-text dark:text-white">Enter Your Registered Email</span></label>
                        <input type="email" {...register("email", { required: 'Email is required.' })} className="input input-sm input-bordered w-full" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <input className="btn btn-sm w-full my-2 text-white" type='submit' value='Send Password Reset Email' />
                </form>
                <p><Link to='/login' className='text-secondary'>Login with Email & Password.</Link></p>

            </div>
        </div>
    );
};

export default ForgetPassword;