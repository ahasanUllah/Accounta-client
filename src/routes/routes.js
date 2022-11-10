import { createBrowserRouter } from 'react-router-dom';
import AddService from '../components/AddService';
import Blog from '../components/Blog';
import Home from '../components/Home';
import MyReviews from '../components/MyReviews';
import Service from '../components/Service';
import ServiceDetails from '../components/ServiceDetails';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import UpdateReview from '../components/UpdateReview';
import PrivateRoute from '../context/PrivateRoute';

import Main from '../layout/Main';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`http://localhost:5000/servicehome`),
         },
         {
            path: '/service',
            element: <Service></Service>,
            loader: () => fetch('http://localhost:5000/services'),
         },
         {
            path: '/addservice',
            element: (
               <PrivateRoute>
                  <AddService></AddService>
               </PrivateRoute>
            ),
         },
         {
            path: '/service/:id',
            element: <ServiceDetails> </ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
         },
         {
            path: '/signup',
            element: <SignUp></SignUp>,
         },
         {
            path: '/signin',
            element: <SignIn></SignIn>,
         },
         {
            path: '/myreviews',
            element: (
               <PrivateRoute>
                  <MyReviews></MyReviews>
               </PrivateRoute>
            ),
            loader: () => fetch('http://localhost:5000/services'),
         },
         {
            path: '/updatereview/:id',
            element: <UpdateReview></UpdateReview>,
            loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
         },
         {
            path: '/blog',
            element: <Blog></Blog>,
         },
      ],
   },
]);
