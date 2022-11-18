import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged in Successfully.');
                navigate(from, { replace: true });
            })
            .catch(err => setLoginError(err.message))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                toast.success('Successfully Logged In')
            })
            .catch(err => {
                toast.error(err.message.split('/')[1].slice(0,-2))
            })
    }


    return (
        <div className='h-[480px] flex flex-col justify-center items-center'>
            <div className='w-96 p-6 dark:bg-slate-800 rounded-xl'>
                <h2 className='text-xl font-bold text-center'>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full dark:text-black ">
                        <label className="label"><span className="label-text dark:text-white">Email</span></label>
                        <input type="email" {...register("email", { required: 'Email is required.' })} className="input input-sm input-bordered w-full" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full dark:text-black">
                        <label className="label"><span className="label-text dark:text-white">Password</span></label>
                        <input type="password" {...register("password", { required: 'Password is required.', minLength: { value: 6, message: 'Password must be at least 6 character or longer.' } })} className="input input-sm input-bordered w-full" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                        <Link to="/forget"><label className="label"><span className="label-text dark:text-white cursor-pointer">Forget password?</span></label></Link>
                    </div>
                    {loginError && <p className='text-red-700 font-bold'>{loginError?.split('/')[1].slice(0, -2)}</p>}
                    <input className="btn btn-sm w-full my-2 text-white" type='submit' value='Login' />
                </form>
                <p>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-sm w-full dark:text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;