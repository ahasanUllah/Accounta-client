import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
   const navigate = useNavigate();

   const handleDetails = () => {
      fetch(`http://localhost:5000/services/${service._id}`)
         .then((res) => res.json())
         .then((data) => console.log(data));

      navigate(`/service/${service._id}`);
   };
   return (
      <div>
         <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img
               src={service.image}
               alt=""
               className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
               <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide">{service.name}</h2>
                  <p className="text-gray-800">{service.description.slice(0, 100)}</p>
                  <p className="font-semibold pt-6">Price: ${service.price}</p>
               </div>
               <button
                  onClick={handleDetails}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-teal-600 text-gray-50"
               >
                  View Details
               </button>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;
