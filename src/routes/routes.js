import { createBrowserRouter } from 'react-router-dom';
import AddService from '../components/AddService';
import Home from '../components/Home';
import Service from '../components/Service';
import ServiceDetails from '../components/ServiceDetails';

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
            element: <AddService></AddService>,
         },
         {
            path: '/service/:id',
            element: <ServiceDetails> </ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
         },
      ],
   },
]);
