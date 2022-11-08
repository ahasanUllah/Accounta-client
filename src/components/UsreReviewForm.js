import React from 'react';

const UsreReviewForm = ({ service, reviews, setReviews }) => {
   console.log(service._id);
   const handleFeedback = (event) => {
      event.preventDefault();
      const feedback = event.target.feedback.value;

      const reviewInfo = {
         serviceId: service._id,
         userName: 'Ahsan',
         userImage: 'https://source.unsplash.com/100x100/?portrait',
         userEmail: 'bulbulahasan@gmail.com',
         feedback,
         date: new Date(),
      };
      fetch(`http://localhost:5000/reviews`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(reviewInfo),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               fetch(`http://localhost:5000/reviews/${service._id}`)
                  .then((res) => res.json())
                  .then((data) => setReviews(data));
            }
            event.target.feedback.value = '';
            console.log(data);
         });
   };

   return (
      <div>
         <div className="flex flex-col max-w-4xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800 mx-auto">
            <div className="flex flex-col items-center w-full space-y-4">
               <h2 className="text-2xl font-semibold text-center">Your opinion matters!</h2>

               <form onSubmit={handleFeedback} className="flex flex-col w-full">
                  <textarea
                     name="feedback"
                     rows="3"
                     placeholder="Message..."
                     className="p-4 rounded-md resize-none text-gray-800 bg-white"
                  ></textarea>
                  <button type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-teal-600">
                     Leave feedback
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UsreReviewForm;
