import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
   const previeousReview = useLoaderData();
   const [review, setReview] = useState(previeousReview);

   const handleChange = (event) => {
      event.preventDefault();
      const feedback = event.target.feedback.value;
      review.feedback = feedback;
      setReview(review);
      fetch(`http://localhost:5000/review/${previeousReview._id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(review),
      })
         .then((res) => res.json())
         .then((data) => {
            toast.success('successfull');
         });
   };

   return (
      <div>
         <div>
            <div className="flex flex-col max-w-4xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 mx-auto">
               <div className="flex flex-col items-center w-full space-y-4">
                  <h2 className="text-2xl font-semibold text-center">Edit Review</h2>

                  <form onSubmit={handleChange} className="flex flex-col w-full">
                     <textarea
                        name="feedback"
                        rows="3"
                        placeholder="Message..."
                        className="p-4 rounded-md resize-none text-gray-800 bg-white"
                        defaultValue={previeousReview.feedback}
                     ></textarea>
                     <button type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-teal-600">
                        Edit feedback
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpdateReview;
