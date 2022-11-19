import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import DayPickerExample from "../Pages/Appointment/AppointmentBanner/DayPickerExample";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import ForgetPassword from "../Pages/Login/ForgetPassword/ForgetPassword";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/forget',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/days',
                element: <DayPickerExample></DayPickerExample>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myappointments',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])