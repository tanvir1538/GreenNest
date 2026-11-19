import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../HomeLayout/HomeLayout';
import Home from '../Home/Home';
import Plants from '../Pages/Plants';
import PlantDetails from '../Pages/PlantDetails';
import Profile from '../Pages/Profile';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ForgotPassword from '../Pages/ForgotPassword';
import NotFound from '../Pages/NotFound';
import PrivateRoute from '../routes/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: (
            <HomeLayout>
                <NotFound />
            </HomeLayout>
        ),
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'plants',
                element: <Plants />
            },
            {
                path: 'plant',
                element: <Plants />
            },
            {
                path: 'plant/:id',
                element: (
                    <PrivateRoute>
                        <PlantDetails />
                    </PrivateRoute>
                )
            },
            {
                path: 'profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);

export default router;
