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

         <div>
            <section>
               <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                  <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                     <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                           <img
                              alt="House"
                              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              class="absolute inset-0 h-full w-full object-cover"
                           />
                        </div>
                     </div>

                     <div class="relative flex items-center bg-gray-100">
                        <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div class="p-8 sm:p-16 lg:p-24">
                           <h2 class="text-2xl font-bold sm:text-3xl">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                           </h2>

                           <p class="mt-4 text-gray-600">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                              esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                              architecto eius quis quibusdam fugiat dicta.
                           </p>

                           <a
                              href="/"
                              class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                           >
                              Get in Touch
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Home;
