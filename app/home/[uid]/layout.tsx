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
import Settings from '@/components/Settings';


interface HomeLayoutProps {
  children: ReactNode;
  params: {
    id: any;
    uid: any;
  };
}

const HomeLayout: FC<HomeLayoutProps> = ({ children, params }) => {
  const backgrounds = ['red', 'yellow', 'blue'];
  const [isDealer, setIsDealer] = useState<boolean | null>(null);
  const [isSettings, setIsSettings] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });
  const [background, setBackground] = useState(backgrounds[0])

  useEffect(() => {
    // Read the "dealer" cookie
    const dealer = Cookies.get('dealer');
    setIsDealer(dealer ? true : false);
    // const theme = Cookies.get('theme');
    // setIsDarkTheme(theme === 'dark');
  }, []);

 

  if (isDealer === null) {
    return    
        
  }


  if (!isDealer) {
    redirect('/not-found')
  }

  const isSettingsChange = ()=>{
    setIsSettings(!isSettings)
  }
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    // Cookies.set('theme', isDarkTheme ? 'light':  'dark'  );
  };
  const  toggleBackground = (background: string) => {
    setBackground(background);
  };

  return (
    <div className='w-full'>
   
    <main className={`w-full h-svh p-5 pt-0 pb-0 ${isDarkTheme ? 'bg-dark-theme text-white' : 'bg-white text-black'} `}>
    {/* {backgrounds.map((t) => (
              <button
                key={t}
                onClick={() => toggleBackground(t)}
                className={` text-white m-1 p-2 rounded`}
                style={{background: `${t}`}}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))} */}
      <Header  isSettingsChange={isSettingsChange} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      <div className={`w-full h-container flex border rounded-lg ${isDarkTheme ? 'bg-darkness-theme text-white  border-none' : 'bg-white text-black'}  `}>
        <Menu params={params} isDarkTheme={isDarkTheme} />
        <div className={`w-line h-full  ${isDarkTheme ? '' : 'bg-gray-50 '} `}></div>
        <div className={`w-4/5 h-full   `}>
          {children}
        </div>
      </div>
    </main>
    {
      isSettings  && (
        <Settings isSettingsChange={isSettingsChange}/>
      )
    }
   
    </div>
    
  );
};

export default HomeLayout;
