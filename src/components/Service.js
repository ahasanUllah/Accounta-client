import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
   const services = useLoaderData();
   console.log(services);
   return (
      <>
         <div className="w-1/2 mx-auto mt-12 space-y-3">
            <h2 className="text-3xl font-semibold text-center">Accounting Services for the Modern Entrepreneur.</h2>
            <p className="">
               works with companies across the country, and serves a variety of different industries. Because of our
               diverse client portfolio, we have been able to observe and serve in many different environments. This
               background equips our team to
            </p>
         </div>

         <div className="grid grid-cols-4 gap-8 container  px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
      </>
   );
};

export default Service;
