import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReview from './UserReview';
import UsreReviewForm from './UsreReviewForm';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../hooks/useTtle';

const ServiceDetails = () => {
   const service = useLoaderData();
   const [reviews, setReviews] = useState([]);
   const { name, image, description, _id } = service;
   console.log(service);
   useTitle('Service Details');

   useEffect(() => {
      fetch(`https://accounta-assignment-server.vercel.app/reviews/${_id}`)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
            console.log(data);
         });
   }, [_id]);

   return (
      <div>
         <div className="relative">
            <img
               className="object-cover w-full h-56 sm:h-96"
               src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
               alt=""
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
               {' '}
               <h2 className="text-white text-4xl font-semibold mt-40 text-center">Service</h2>
            </div>
         </div>

         <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
               <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold sm:text-4xl">{name}</h2>
               </div>

               <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                     <PhotoProvider>
                        <PhotoView src={image}>
                           <img alt="Party" src={image} className="absolute inset-0 h-full w-full object-cover" />
                        </PhotoView>
                     </PhotoProvider>
                  </div>

                  <div className="lg:py-16">
                     <article className="space-y-4 text-gray-600">
                        <p>{description}</p>
                     </article>
                  </div>
               </div>
            </div>
         </section>
         {/* user Review */}
         {reviews.map((review) => (
            <UserReview key={review._id} review={review}></UserReview>
         ))}

         {/* User Review form */}
         <UsreReviewForm service={service} reviews={reviews} setReviews={setReviews}></UsreReviewForm>
      </div>
   );
};

export default ServiceDetails;
