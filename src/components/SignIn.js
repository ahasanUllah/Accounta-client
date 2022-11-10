import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../hooks/useTtle';

const SignIn = () => {
   const { login, googleLogin, loader, setLoader } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   useTitle('Sign In');

   const from = location.state?.from?.pathname || '/';

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      login(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            const currentUser = {
               email: user.email,
            };
            //Jwt Token
            fetch('https://accounta-assignment-server.vercel.app/jwt', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(currentUser),
            })
               .then((res) => res.json())
               .then((data) => {
                  localStorage.setItem('accounta-token', data.token);
               });
            navigate(from, { replace: true });
            toast.success('Sign in successfull');
         })
         .catch((error) => {
            toast.warning(error.message);
         })
         .finally(() => {
            setLoader(false);
         });
   };

   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.login;
            navigate(from, { replace: true });
            toast.success('Sign in successfull');
         })
         .catch((error) => {
            toast.warning(error.message);
         });
   };
   return (
      <div>
         {loader ? (
            <div className="flex items-center justify-center space-x-2 h-screen">
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
               <div className="w-4 h-4 rounded-full animate-pulse bg-teal-600"></div>
            </div>
         ) : (
            <>
               <div className="">
                  <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800 my-20 container mx-auto">
                     <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                     <p className="text-sm text-center text-gray-600">
                        Dont have account?
                        <Link to="/signup" rel="noopener noreferrer" className="focus:underline hover:underline">
                           Sign up here
                        </Link>
                     </p>
                     <div className="my-6 space-y-4">
                        <button
                           onClick={handleGoogleLogin}
                           aria-label="Login with Google"
                           type="button"
                           className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-teal-600"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                           </svg>
                           <p>Login with Google</p>
                        </button>
                     </div>
                     <div className="flex items-center w-full my-4">
                        <hr className="w-full text-gray-600" />
                        <p className="px-3 text-gray-600">OR</p>
                        <hr className="w-full text-gray-600" />
                     </div>
                     <form
                        onSubmit={handleSubmit}
                        noValidate=""
                        action=""
                        className="space-y-8 ng-untouched ng-pristine ng-valid"
                     >
                        <div className="space-y-4">
                           <div className="space-y-2">
                              <label htmlFor="email" className="block text-sm">
                                 Email address
                              </label>
                              <input
                                 type="email"
                                 name="email"
                                 id="email"
                                 placeholder="leroy@jenkins.com"
                                 className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-teal-600"
                                 data-temp-mail-org="2"
                              />
                           </div>
                           <div className="space-y-2">
                              <div className="flex justify-between">
                                 <label htmlFor="password" className="text-sm">
                                    Password
                                 </label>
                                 <a
                                    rel="noopener noreferrer"
                                    href="/"
                                    className="text-xs hover:underline text-gray-600"
                                 >
                                    Forgot password?
                                 </a>
                              </div>
                              <input
                                 type="password"
                                 name="password"
                                 id="password"
                                 placeholder="*****"
                                 className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-teal-600"
                              />
                           </div>
                        </div>
                        <button
                           type="submit"
                           className="w-full px-8 py-3 font-semibold rounded-md bg-teal-600 text-gray-50"
                        >
                           Sign in
                        </button>
                     </form>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default SignIn;
