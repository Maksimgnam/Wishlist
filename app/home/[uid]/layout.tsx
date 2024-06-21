// import Header from "@/components/Header";
// import Menu from "@/components/Menu";
// import { FC, ReactNode } from "react";



// interface HomeLayoutProps {
//   children: ReactNode;
//   params: {
//     id: any;
//     uid: any;
//   };
// }

// const HomeLayout: FC<HomeLayoutProps> = ({ children, params }) => {
//   return (
//     <main className="w-full h-svh  p-5 pt-0 pb-0   bg-slate-50 ">
 
//  <Header/>


//    <div className="w-full h-container flex   bg-white border rounded-lg pb-2">
//    <Menu params={params} />
//    <div className="w-line h-full bg-gray-50"></div>




//   <div className="w-4/5 h-auto">
//   {children}
//   </div>

//   </div>
 
    
//     </main>
//   );
// };

// export default HomeLayout;

'use client'
import React, { useEffect, useState, FC, ReactNode } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { redirect } from 'next/navigation';

interface HomeLayoutProps {
  children: ReactNode;
  params: {
    id: any;
    uid: any;
  };
}

const HomeLayout: FC<HomeLayoutProps> = ({ children, params }) => {
  const [isDealer, setIsDealer] = useState<boolean | null>(null);

  useEffect(() => {
    // Read the "dealer" cookie
    const dealer = Cookies.get('dealer');
    setIsDealer(dealer ? true : false);
  }, []);

  if (isDealer === null) {
    return    
        
  }

  if (!isDealer) {
    redirect('/not-found')
  }

  return (
    <main className="w-full h-svh p-5 pt-0 pb-0 bg-slate-50">
      <Header />
      <div className="w-full h-container flex bg-white border rounded-lg pb-2">
        <Menu params={params} />
        <div className="w-line h-full bg-gray-50"></div>
        <div className="w-4/5 h-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
