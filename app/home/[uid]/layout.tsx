
'use client'
import React, { useEffect, useState, FC, ReactNode } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { redirect } from 'next/navigation';
import Settings from '@/components/Settings';
import useStore from '@/store/store';
import MenuBar from '@/components/MenuBar';
import CreateWishList from '@/components/CreateWishList';
import WishesData from '@/components/Wishes/WishesData';



interface HomeLayoutProps {
  children: ReactNode;
  params: {
    id: any;
    uid: any;
  };
}

const HomeLayout: FC<HomeLayoutProps> = ({ children, params }) => {
  const [isDealer, setIsDealer] = useState<boolean | null>(null);
  const isMenuBarOpen = useStore((state) => state.isMenuBarOpen);
  const isSettings = useStore((state) => state.isSettings);
  const isCreateWishlist = useStore((state) => state.isCreateWishlist);
  const  toggleCreateWishlist = useStore((state) => state.toggleCreateWishlist);


  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return false;
  });


  useEffect(() => {
    const dealer = Cookies.get('dealer');
    setIsDealer(dealer ? true : false);

  }, []);


  if (isDealer === null) {
    return    
        
  }

  if (!isDealer) {
    redirect('/not-found')
  }


  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');

  };



  return (
    <div className='w-full'>
    <main className={`w-full h-svh p-5 pt-0 pb-0 ${isDarkTheme ? 'bg-dark-theme text-white' : 'bg-white text-black'} `}>
      <Header   isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      <div className={`w-full h-container flex border rounded-lg ${isDarkTheme ? 'bg-darkness-theme text-white  border-none' : 'bg-white text-black'}  `}>
        <Menu params={params} isDarkTheme={isDarkTheme} />
        <div className={`w-line h-full  ${isDarkTheme ? '' : 'bg-gray-50 '} `}></div>
        <div className={`w-full lg:w-4/5  h-full   `}>
          {children}
        </div>
      </div>
    </main>
    {
      isSettings  && (
        <Settings  isDarkTheme={isDarkTheme}/>
      )
    }
    {
      isMenuBarOpen &&  <MenuBar isDarkTheme={isDarkTheme} params={params}/>
    }
    {
      isCreateWishlist &&     <CreateWishList params={params} isDarkTheme={isDarkTheme} />
    }


   
    </div>
    
  );
};

export default HomeLayout;
