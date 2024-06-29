'use client'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {auth} from '../../../firebase/config'
import { User } from '@/interfaces';
import Home from '@/components/Home';

const page = () => {
 
  return (
    <div className='sm:w-full  w-10/12  h-full rounded-e-lg  '>
      <Home/>
    </div>
  )
}

export default page



// 'use client'
// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import Home from '@/components/Home';

// const Page = () => {
//   const [isDealer, setIsDealer] = useState(null);

//   useEffect(() => {
//     // Read the "dealer" cookie
//     const dealer = Cookies.get('dealer');
//     setIsDealer(dealer ? true : false);
//   }, []);

//   if (isDealer === null) {
//     // While the cookie check is in progress, you can show a loading indicator
//     return <div>Loading...</div>;
//   }

//   if (isDealer) {
//     // Render the page if the "dealer" cookie is present
//     return (
//       <div className='sm:w-full w-10/12 h-full bg-white rounded-e-lg'>
//         <Home />
//       </div>
//     );
//   } else {
//     // Render a "page not found" message if the "dealer" cookie is not present
//     return <div>Page Not Found</div>;
//   }
// };

// export default Page;

