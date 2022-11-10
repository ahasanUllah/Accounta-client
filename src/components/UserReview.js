import React from 'react';
import moment from 'moment';

const UserReview = ({ review }) => {
   const { userName, userImage, feedback, date } = review;

   return (
      <div>
         <div className="container flex flex-col w-full max-w-4xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            <div className="flex justify-between p-4">
               <div className="flex space-x-4">
                  <div>
                     <img src={userImage} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                  </div>
                  <div>
                     <h4 className="font-bold">{userName}</h4>
                     <span className="text-xs text-gray-600">
                        {moment.utc(date).local().startOf('seconds').fromNow()}
                     </span>
                  </div>
               </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
               <p>{feedback}</p>
            </div>
         </div>
      </div>
   );
};

export default UserReview;
