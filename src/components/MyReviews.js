import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import MyReviewTable from './MyReviewTable';
import moment from 'moment';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {
   const { user } = useContext(AuthContext);
   const [myReviews, setMyReviews] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/reviews/?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => {
            setMyReviews(data);
         });
   }, []);
   return (
      <div>
         <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
               <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
               <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                     <colgroup>
                        <col />
                        <col />
                        <col />

                        <col />
                        <col className="w-24" />
                     </colgroup>
                     <thead className="bg-gray-300">
                        <tr className="text-left">
                           <th className="p-3">Time</th>
                           <th className="p-3">Review</th>
                           <th className="p-3">Issued</th>

                           <th className="p-3 text-right">Amount</th>
                           <th className="p-3">Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {myReviews.map((review) => (
                           <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                              <td className="p-3">
                                 <p>{moment.utc(review.date).local().startOf('seconds').fromNow()}</p>
                              </td>
                              <td className="p-3">
                                 <p>{review.feedback}</p>
                              </td>
                              <td className="p-3">{review.serviceName}</td>

                              <td className="p-3 text-right">
                                 <button
                                    type="button"
                                    className="px-8 py-3 font-semibold rounded-full bg-red-600 text-gray-100"
                                 >
                                    Delete
                                 </button>
                              </td>
                              <td className="p-3 text-right">
                                 <button
                                    type="button"
                                    className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
                                 >
                                    Edit
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyReviews;
