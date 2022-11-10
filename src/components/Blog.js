import React from 'react';
import useTitle from '../hooks/useTtle';

const Blog = () => {
   useTitle('Blog');
   return (
      <div className="my-20">
         <div className="bg-gray-100 text-gray-800 py-20">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <h1 className="text-2xl font-bold hover:underline">Difference between SQL and NoSQL</h1>
                  <p className="mt-2">
                     SQL databeses are primarily called relational detabases wheres NOSQL database are called non
                     relational database
                     <br />
                     <strong>SQL: </strong> <br />
                     Relational Database management system it has static or predefined schema, not suitable for
                     hierarchical data storage. The SQL databeses are best suited for complex queries. it is vertically
                     scalable
                     <br />
                     <strong>NoSQL:</strong> <br />
                     Non- relational database system. they have dynamic schema. NoSql databeses are best for
                     heirarchical data storage. Not good for complex queries and they horizontally scalable
                  </p>
               </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <h1 className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</h1>
                  <p className="mt-2">
                     JWT is compact readable and digitally signed using a private key or public key pair by the identity
                     Provider. so that integrity and authenticity of the token can be virified.
                     <br />
                     <strong>How it works:</strong> <br />
                     first user sign in using username and passowrd. then server verifies the credentials and issues a
                     jwt signed using either a secret or private key. the Client side uses teh JWT to access protected
                     resources by passing the JWT in HTTP Authorization header. server then verifies the authenticity of
                     the token using the secret key
                  </p>
               </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <h1 className="text-2xl font-bold hover:underline">
                     What is the difference between javascript and NodeJS?
                  </h1>
                  <p className="mt-2">
                     JavaScript is a simgle programming language that can be used with any browser that has the
                     javascript engine in it. On the ohter hand node js is runtime envirionment for the javascript
                     programming language. javascript mainly runs on the client site on the ther hand node js runs on
                     server side.
                  </p>
               </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <h1 className="text-2xl font-bold hover:underline">
                     How does NodeJS handle multiple requests at the same time?
                  </h1>
                  <p className="mt-2">
                     When node js reveive multiple request at the same time it place then in the event queue. Node Js
                     has its own eventloop which is an infinite loop that receive request and process them. for example
                     if your system has 8 cpu node js will created 8 instances and every instance has its own event loop
                     now node js can process all request parallelly
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
