import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setIsDark] = useState(userTheme);

    const themeCheck = () => {
        if (userTheme === 'dark' || (!userTheme && systemTheme)) {
            document.documentElement.classList.add('dark');
            return;
        }
    };

    const themeSwitch = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
            return;
        }
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    };

    const handleSwitchThemeMode = () => {
        setIsDark(!isDark)
        themeSwitch();
    }

    themeCheck();


    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    const menuItems = <React.Fragment>
        <li><Link className='rounded-lg' to="/">Home</Link></li>
        <li><Link className='rounded-lg' to="/">About</Link></li>
        <li><Link className='rounded-lg' to="/appointment">Appointment</Link></li>
        <li><Link className='rounded-lg' to="/">Contact Us</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='rounded-lg' to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogOut} className='rounded-lg' to="/">Sign Out</button></li>
                </>
                :
                <li><Link className='rounded-lg' to="/login">Login</Link></li>
        }
        <label className="swap swap-rotate mr-4">
            <input onClick={handleSwitchThemeMode} type="checkbox" defaultChecked={isDark === 'dark' ? true : false} />
            <svg className=" sun-icon swap-on w-6 fill-current h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            <svg className=" moon-icon swap-off w-6 fill-current h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 justify-between dark:bg-slate-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content dark:bg-slate-500 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-menu-item-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;