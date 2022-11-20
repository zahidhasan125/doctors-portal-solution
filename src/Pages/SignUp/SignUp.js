import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/', {replace: true})
    }

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User created successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDb(data.name, data.email)
                    })
                    .catch(error => console.error(error.message))
            })
            .catch(error => setSignUpError(error.message))
    }

    const saveUserToDb = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCreatedUserEmail(email);
                }
            })
    }

    return (
        <div className='h-[480px] flex flex-col justify-center items-center'>
            <div className='w-96 p-6 dark:bg-slate-800 rounded-xl'>
                <h2 className='text-xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full dark:text-black">
                        <label className="label"><span className="label-text dark:text-white">Name</span></label>
                        <input type="text" {...register('name', { required: "Name is required." })} className="input input-sm input-bordered w-full" />
                        {errors.name && <p className='text-red-700 font-bold'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full dark:text-black">
                        <label className="label"><span className="label-text dark:text-white">Email</span></label>
                        <input type="email" {...register('email', { required: "Email is required." })} className="input input-sm input-bordered w-full" />
                        {errors.email && <p className='text-red-700 font-bold'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full dark:text-black">
                        <label className="label"><span className="label-text dark:text-white">Password</span></label>
                        <input type="password" {...register('password', { required: "Password is required.", minLength: { value: 6, message: 'Password must be at least 6 characters or longer.' }, pattern: { value: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, message: "Password is weak." } })} className="input input-sm input-bordered w-full" />
                        {errors.password && <p className='text-red-700 font-bold'>{errors.password?.message}</p>}
                        {signUpError && <p className='text-red-700 font-bold'>{signUpError?.split('/')[1].slice(0, -2)}</p>}
                    </div>

                    <input className="btn btn-sm w-full my-6 text-white" type='submit' value='Sign Up' />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-sm w-full dark:text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;