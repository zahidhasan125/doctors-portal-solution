import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='h-[480px] flex flex-col justify-center items-center'>
            <div className='w-96 px-6'>
                <h2 className='text-xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register('name', { required: "Name is required." })} className="input input-sm input-bordered w-full" />
                        {errors.name && <p className='text-red-700 font-bold'>{ errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register('email', { required: "Email is required." })} className="input input-sm input-bordered w-full" />
                        {errors.email && <p className='text-red-700 font-bold'>{ errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register('password', { required: "Password is required.", minLength: { value: 6, message: 'Password must be at least 6 characters or longer.' }, pattern: {value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ , message: "Password is weak."} })} className="input input-sm input-bordered w-full" />
                        {errors.password && <p className='text-red-700 font-bold'>{ errors.password?.message}</p>}
                    </div>

                    <input className="btn btn-sm w-full my-6 text-white" type='submit' value='Sign Up' />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-sm w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;