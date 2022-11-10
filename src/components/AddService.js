import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddService = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const price = form.price.value;
      const image = form.image.value;
      const description = form.description.value;

      const addserviceInfo = {
         name,
         price,
         image,
         description,
      };
      console.log(addserviceInfo);
      fetch('https://accounta-assignment-server.vercel.app/services', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(addserviceInfo),
      })
         .then((res) => res.json())
         .then((data) => {
            toast.success('Service added');
            form.reset();
         });
   };
   return (
      <div>
         <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
               <div className="">
                  <div className="rounded-lg bg-white p-8 shadow-lg  lg:p-12">
                     <h2 className="text-left text-xl font-semibold mb-3">Add service</h2>
                     <form onSubmit={handleSubmit} action="" className="space-y-4">
                        <div>
                           <label className="sr-only" htmlFor="name">
                              Name
                           </label>
                           <input
                              required
                              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                              placeholder="Name"
                              type="text"
                              id="name"
                           />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                           <div>
                              <label className="sr-only" htmlFor="price">
                                 Price
                              </label>
                              <input
                                 required
                                 className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                 placeholder="Price "
                                 type="price"
                                 id="price"
                              />
                           </div>

                           <div>
                              <label className="sr-only" htmlFor="image">
                                 image
                              </label>
                              <input
                                 required
                                 className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                 placeholder="image url"
                                 type="text"
                                 id="image"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="sr-only" htmlFor="description">
                              Description
                           </label>
                           <textarea
                              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                              placeholder="Description"
                              rows="8"
                              id="description"
                           ></textarea>
                        </div>

                        <div className="mt-4">
                           <button
                              type="submit"
                              className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white sm:w-auto"
                           >
                              <span className="font-medium"> Add Service </span>

                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="ml-3 h-5 w-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                 />
                              </svg>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AddService;
