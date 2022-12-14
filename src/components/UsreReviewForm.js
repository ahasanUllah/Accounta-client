import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const UsreReviewForm = ({ service, reviews, setReviews }) => {
   const { user } = useContext(AuthContext);
   const handleFeedback = (event) => {
      event.preventDefault();
      const feedback = event.target.feedback.value;

      const reviewInfo = {
         serviceId: service._id,
         serviceName: service.name,
         userName: user.displayName,
         userImage: user.photoURL,
         userEmail: user.email,
         feedback,
         date: new Date(),
      };
      fetch(`https://accounta-assignment-server.vercel.app/reviews`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(reviewInfo),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               fetch(`https://accounta-assignment-server.vercel.app/reviews/${service._id}`)
                  .then((res) => res.json())
                  .then((data) => {
                     setReviews(data);
                     console.log(data);
                  });
            }
            event.target.feedback.value = '';
            console.log(data);
         });
   };

   return (
      <div className="mb-20">
         {user?.email ? (
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
         ) : (
            <div className="text-center">
               <p>
                  Please{' '}
                  <Link className="text-blue-700 font-semibold" to="/signin">
                     Login
                  </Link>{' '}
                  to give review
               </p>
            </div>
         )}
      </div>
   );
};

export default UsreReviewForm;
