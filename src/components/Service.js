import React, { useState, useEffect } from 'react';

import useTitle from '../hooks/useTtle';
import ServiceCard from './ServiceCard';

const Service = () => {
   const [services, setServices] = useState([]);
   const [spinner, setSpinner] = useState(true);
   useEffect(() => {
      setSpinner(true);
      fetch(`https://accounta-assignment-server.vercel.app/services`)
         .then((res) => res.json())
         .then((data) => {
            setServices(data);
            setSpinner(false);
         });
   }, []);
   console.log(services);
   useTitle('Services');
   return (
      <>
         {spinner ? (
            <div className="flex items-center justify-center space-x-2 h-screen">
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
            </div>
         ) : (
            <>
               <div className="w-1/2 mx-auto mt-12 space-y-3">
                  <h2 className="text-3xl font-semibold text-center">
                     Accounting Services for the Modern Entrepreneur.
                  </h2>
                  <p className="">
                     works with companies across the country, and serves a variety of different industries. Because of
                     our diverse client portfolio, we have been able to observe and serve in many different
                     environments. This background equips our team to
                  </p>
               </div>

               <div className="grid grid-cols-4 gap-8 container  px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                  {services.map((service) => (
                     <ServiceCard key={service._id} service={service}></ServiceCard>
                  ))}
               </div>
            </>
         )}
      </>
   );
};

export default Service;
