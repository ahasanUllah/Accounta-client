import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import ServiceCard from './ServiceCard';

const Home = () => {
   const services = useLoaderData();
   return (
      <div className="mb-24 space-y-24">
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
         <div className="grid grid-cols-3 gap-4 container  px-4   mx-auto text-center  md:px-10 lg:px-32 text-gray-900">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
         <div className="text-center">
            <Link to="/service" className=" ">
               <button type="button" className="px-12 py-3 font-semibold rounded bg-teal-600 text-gray-100">
                  All services
               </button>
            </Link>
         </div>

         <div>
            <section>
               <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                  <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                     <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                           <img
                              alt="House"
                              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                           />
                        </div>
                     </div>

                     <div class="relative flex items-center bg-gray-100">
                        <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div class="p-8 sm:p-16 lg:p-24">
                           <h2 class="text-2xl font-bold sm:text-3xl">
                              Provides Perfect Solution For All Accounting Services.
                           </h2>

                           <p class="mt-4 text-gray-600">
                              Accounting for start-ups or small business organisations can be a cumbersome process. Most
                              of us do not understand the technical jargons the accountants speak.
                           </p>

                           <a
                              href="/"
                              class="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                           >
                              Get in Touch
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <h2 className="text-4xl text-center font-bold mb-10">Why choose us</h2>
         <section className="p-6 bg-gray-100 text-gray-800">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                  <p className="text-sm sm:text-base">Clients</p>
               </div>
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                  <p className="text-sm sm:text-base">Followers on social media</p>
               </div>
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                  <p className="text-sm sm:text-base">Published books</p>
               </div>
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                  <p className="text-sm sm:text-base">TED talks</p>
               </div>
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                  <p className="text-sm sm:text-base">Years of experience</p>
               </div>
               <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                  <p className="text-sm sm:text-base">Sevices</p>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;
