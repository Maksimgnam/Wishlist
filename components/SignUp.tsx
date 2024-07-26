import React, { FC, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Auth } from '@/interfaces';
import Cookies from 'js-cookie';

const SignUp: FC<Auth> = ({ isChange }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationEmail = async (code:string) => {
    const sendToUserData= {
      to: email,
      verification_code: code
    };
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendToUserData)
      });
      setIsCodeSent(true);

      const result = await response.json();
      return result;
    
    } catch (error) {
      console.log('Error sending email', error);
    }
  };

    const signUp = async (event: React.FormEvent) => {
      
        if (name.trim()===''){
          alert('Please write your name')
          
        }else{


      
      
      event.preventDefault();
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (res && res.user) {
          await updateProfile(res.user, { displayName: name,} );
          setEmail('');
          setPassword('');
          setName('');
          setDateOfBirth('')
          const code = generateVerificationCode();
          setVerificationCode(code);
          sendVerificationEmail(code);
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error(error);
        if(error?.toString().slice(30) ===' (auth/email-already-in-use).'){
          alert('Email already in use. Try again')
        }
  
        if(error?.toString().slice(30) ==='Error (auth/invalid-email).'){
          alert('Invalid email use another')
        }
        if(error?.toString().slice(30) ==='Password should be at least 6 characters (auth/weak-password).'){
          alert('Password should be at least 6 characters (auth/weak-password).')
        }
  
        alert(error?.toString().slice(25))
  
      }
    }
    };

  


  const verifyCode = () => {
    if (enteredCode === verificationCode) {
      alert('Successfully signed up and verified!');
      router.push(`/home/${auth.currentUser?.uid}`);
      Cookies.set('dealer', 'dealer', { expires: 7 }); 
    } else {
      alert('Invalid verification code. Please try again.');
    }
  };


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const uid = user.uid;
        Cookies.set('dealer', 'dealer', { expires: 7 }); 
        router.push(`/home/${uid}`); 
        console.log('User signed in:', user);

      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
 
  };

  return (
<div  className='w-full h-svh flex items-center justify-center'>
      {!isCodeSent ? (
        <div className='w-80  h-signup-card bg-white     rounded-xl shadow-xl flex flex-col items-center justify-between p-6'>
        <h2 className='text-2xl text-black  font-medium'>Sign up</h2>
     
          <div className='w-full h-48 flex flex-col justify-between'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full h-12 bg-transparent text-black   border rounded outline-none pl-2'
              placeholder='Name'
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-12 bg-transparent text-black   border rounded outline-none pl-2'
              placeholder='Email'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-12 bg-transparent text-black border rounded outline-none pl-2  '
              placeholder='Password'
            />

          </div>
          <button onClick={signUp} className='w-full h-12 rounded bg-black'>
            <p className='text-lg text-white font-medium'>Sign up</p>
          </button>
          <button onClick={googleSignIn} className='w-full h-12 rounded bg-slate-50 flex items-center justify-center'>
            <Image src='/google-logo.png' width={24} height={24} alt='' className=' relative right-3'/>
            <p className='text-md text-black font-medium'>Sign up with Google</p>
          </button>
          <div className='w-full h-6 flex items-center justify-end'>
        <div className='w-auto h-auto flex'>
          <p className='text-sm font-medium text-blue-500 cursor-pointer mr-3'>Sign up</p>
          <p onClick={isChange} className='text-sm text-black  font-medium cursor-pointer'>Sign in</p>
        </div>
      </div>
        </div>
      ) : (
        <>
                <div className='w-80 h-52 border rounded  flex flex-col items-center justify-between p-4 '>
             <h2 className='text-2xl font-medium'>Verification</h2>
            <div className='w-full h-12 flex flex-col justify-between'>
             <input
                type="text"
                value={enteredCode}
                onChange={(e) => setEnteredCode(e.target.value)}
                className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
                placeholder='Enter verification code'
              />
            </div>
            <button onClick={verifyCode} className='w-full h-12 rounded bg-yellow'>
              <p className='text-lg text-white font-medium'>Verify Code</p>
            </button>
          </div>
        </>
      )}
    

    </div>
  );
};

export default SignUp;

