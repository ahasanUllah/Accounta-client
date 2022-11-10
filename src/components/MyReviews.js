import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../hooks/useTtle';

const MyReviews = () => {
   const { user, logout } = useContext(AuthContext);
   const [myReviews, setMyReviews] = useState([]);
   useTitle('My Reviews');

   useEffect(() => {
      fetch(`http://localhost:5000/reviews/?email=${user.email}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem('accounta-token')}`,
         },
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               logout();
            }
            return res.json();
         })
         .then((data) => {
            setMyReviews(data);
            console.log(data);
         });
   }, [user?.email, logout]);

   const handleDelete = (id) => {
      fetch(`http://localhost:5000/reviews/${id}`, {
         method: 'DELETE',
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               const remaining = myReviews.filter((reviews) => reviews._id !== id);
               setMyReviews(remaining);
               toast.success('Delete successfull');
            }
         });
   };
   return (
      <div>
         {myReviews.length === 0 ? (
            <div className="w-full h-screen flex justify-center items-center">
               <p className="text-2xl h-1/3">No Reviews were added</p>
            </div>
         ) : (
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
                              <th className="p-3">service</th>

                              <th className="p-3 text-right"></th>
                              <th className="p-3"></th>
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
                                       onClick={() => handleDelete(review._id)}
                                       type="button"
                                       className="px-8 py-3 font-semibold rounded-full bg-red-600 text-gray-100"
                                    >
                                       Delete
                                    </button>
                                 </td>
                                 <td className="p-3 text-right">
                                    <Link to={`/updateReview/${review._id}`}>
                                       <button
                                          type="button"
                                          className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
                                       >
                                          Edit
                                       </button>
                                    </Link>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default MyReviews;
