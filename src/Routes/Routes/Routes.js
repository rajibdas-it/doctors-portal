import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ForgetPassword from "../../Pages/ForgetPassword/ForgetPassword";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoutes/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/appointment", element: <Appointment></Appointment> },
      { path: "/signup", element: <Register></Register> },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard></Dashboard>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/resetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctor",
        element: (
          <AdminRoute>
            <ManageDoctor></ManageDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
