import React from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[480px] flex flex-col justify-center items-center'>
            <div className='w-96 px-6'>
                <h2 className='text-xl font-bold text-center'>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: 'Email is required.' })} className="input input-sm input-bordered w-full" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {required: 'Password is required.', minLength: {value: 6, message: 'Password must be at least 6 character or longer.'}})} className="input input-sm input-bordered w-full" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget password?</span></label>
                    </div>

                    <input className="btn btn-sm w-full my-2 text-white" type='submit' value='Login' />
                </form>
                <p>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-sm w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;