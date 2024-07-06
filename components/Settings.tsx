import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { EmailAuthProvider } from 'firebase/auth';
import { reauthenticateWithCredential, deleteUser } from 'firebase/auth';
import { User } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface SettingsData{
  isSettingsChange:()=> void,
  isDarkTheme: boolean
}

const Settings:FC<SettingsData> = ({isSettingsChange, isDarkTheme}) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter()
  const currentUser = auth.currentUser;




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const newUser: User = {
          uid: authUser.uid,
          displayName: authUser.displayName || '',
          email: authUser.email || '',
        };
        setUser(newUser);
      } else {
        setUser(null);
      }
      console.log(authUser);
    });

    return () => unsubscribe();
  }, []);
  const deleteAccount = async () => {
    if (!currentUser) {
      return;
    }
  
    try {
      const password = prompt('Please enter your password to confirm deletion:');
      if (!password || !currentUser.email) {
        console.error('Password or email is missing.');
        return;
      }
      const credential = EmailAuthProvider.credential(currentUser.email, password);
      await reauthenticateWithCredential(currentUser, credential);
      await deleteUser(currentUser);
      console.log('Account deleted successfully.');
      router.push('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };
  
  const signOut = async () => {
    try {
        await auth.signOut();
        router.push('/registration')
        Cookies.remove('dealer')

  
    } catch (error) {
        console.error('Error signing out:', error);
  
    }
  
  }

  return (
    <div className={`w-full h-svh bg-dark flex items-center justify-center  absolute top-0`}>
        <div className={`sm:w-2/5 w-10/12 h-3/6 bg-white ${isDarkTheme ? 'bg-darkness-theme   text-white border-none ' : 'bg-white text-black border-2  '} rounded-lg shadow-2xl flex   pl-6 pr-6`}>
        
            <div className='w-full h-full '>
              <div className='w-full h-11  flex items-end justify-between    '>
                <h2 className='text-2xl'>Settings</h2>
                <p className='text-xl pb-1 ' onClick={isSettingsChange}>x</p>
              </div>
              
              <div className='w-full h-auto mt-1 '>
                <div className='w-full h-10  flex items-center  p-2 pt-3 '>
                <div className='w-auto h-auto flex items-center   '>
                  <button className='w-7 h-7 bg-yellow-300 text-black rounded'>
                    <p className='text-sm font-medium'>{user?.displayName.slice(0, 1)}</p>
                  </button>
                    <p className='text-lg font-medium pl-2'>{user?.displayName}</p>
                  </div>
                  <button className='w-5 h-5 bg-yellow-200 rounded flex items-center  justify-center ml-4'>
                    <Image src='/edit.png' width={13} height={13} alt=''/>
                  </button>
                </div>
          
                <div className='w-full h-10  flex items-center p-2 pt-3 '>
                <div className='w-auto h-auto flex items-center '>
                  <button className='w-6 h-6 bg-yellow-300 text-black rounded flex items-center  justify-center'>
                     <img className='w-3 h-3' src="https://cdn.iconscout.com/icon/free/png-256/free-email-2026367-1713640.png" alt="" />
                  </button>
                  <p className='text-md font-medium pl-2'>{user?.email}</p>
                  </div>
                  <button className='w-5 h-5 bg-yellow-200 rounded flex items-center  justify-center ml-4'>
                    <Image src='/edit.png' width={13} height={13} alt=''/>
                  </button>

                  
                </div>
                <div className='w-full h-10  flex items-center p-2 pt-3 '>
                  <div className='w-auto h-auto flex items-center '>

            
                  <button className='w-6 h-6 bg-yellow-300 text-black rounded flex items-center  justify-center'>
                     <img className='w-4 h-4' src="https://cdn-icons-png.flaticon.com/512/783/783886.png" alt="" />
                  </button>
                  <p className='text-sm font-medium pl-2'>{user?.uid}</p>
                  </div>
       
                  
                  
                </div>
                <div className='w-full h-10  flex flex-col  p-2 pt-3  '>
                  <button onClick={deleteAccount} className='w-auto flex h-7  text-black rounded  '>
                  <div className='w-6 h-6 bg-red-400 text-black rounded flex items-center  justify-center'>
                    <Image src='/delete.png' width={11} height={11} alt=''/>
                  
                  </div>
                  <p className='text-red-400 pl-2'>Delete account</p>
                  </button>
                  <button onClick={signOut} className='w-auto flex h-7  text-black rounded mt-2  '>
                  <div className='w-6 h-6 bg-green-400 text-black rounded flex items-center  justify-center'>
                    <Image src='/signOut.png' width={11} height={11} alt=''/>
                  
                  </div>
                  <p className='text-green-400 pl-2 '>Sign out of account</p>
                  </button>
                
                  
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Settings