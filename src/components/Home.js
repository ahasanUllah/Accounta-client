import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import ServiceCard from './ServiceCard';

const Home = () => {
   const services = useLoaderData();
   return (
      <div className="mb-24">
         <section>
            <div className="bg-teal-600">
               <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                  <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
                     Efficient Accounting Solutions to Grow Your Business
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                     From bookkeeping to tax filing, Accounta is the all-in-one financial toolkit your business can
                     count on.
                  </p>
                  <div className="flex flex-wrap justify-center">
                     <button
                        type="button"
                        className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
                     >
                        Get started
                     </button>
                     <button
                        type="button"
                        className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
                     >
                        Learn more
                     </button>
                  </div>
               </div>
            </div>
            <img src={hero} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
         </section>
         <div className="grid grid-cols-3 gap-4 container  px-4  pb-12 mx-auto text-center  md:px-10 lg:px-32 text-gray-900">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
         <Link to="/service" className="text-center ">
            <button type="button" className="px-8 py-3 font-semibold rounded bg-teal-600 text-gray-100">
               All services
            </button>
         </Link>
      </div>
   );
};

export default Home;
