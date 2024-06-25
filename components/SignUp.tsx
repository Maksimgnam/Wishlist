// "use client"
// import React, { FC, useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase/config'
// import { useRouter } from 'next/navigation';
// import { Auth } from '@/interfaces';



// const SignUp:FC<Auth> = ({isChange}) => {
//   const router = useRouter()
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signUp = async (event:React.FormEvent) => {
//     event.preventDefault();
   
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       if (res && res.user) {
//           await updateProfile(res.user, { displayName: name });
//           setEmail('');
//           setPassword('');
//           setName('');
//           alert('Successfully signed up');
//           const uid = res.user.uid;
//           router.push(`/home/${uid}`)
//       } else {
//           console.error('Authentication failed');
         
//       }
//   } catch (error) {
//       console.error(error);
      
//   }
// }
//   return (
//     <div className='w-80 h-96 border  shadow-2xl  rounded-xl flex flex-col  items-center  justify-between p-6'>
//         <h2 className='text-2xl text-black font-medium'> Sign up</h2>
//         <div className='w-full h-44 flex flex-col justify-between' >
//             <input type="text"  value={name} onChange={(e) => setName(e.target.value)} className='w-full h-12 bg-white text-black border rounded outline-none pl-2' placeholder='Name' />
//             <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full h-12 bg-white text-black border  rounded  outline-none pl-2' placeholder='Email'  />
//             <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full h-12 bg-white text-black border   outline-none pl-2' placeholder='Password'  />
//         </div>

      
//         <button  onClick={signUp} className='w-full h-12  rounded bg-yellow'>
//           <p className='text-lg text-white font-medium'>Sign up</p>
//         </button>
  
//         <div className='w-full h-6 flex items-center  justify-end' >
//             <div className='w-auto h-auto flex '>
//                 <p className='text-sm font-medium text-blue-500 cursor-pointer mr-3'>Sign up</p>
//                 <p  onClick={isChange} className='text-sm text-black font-medium cursor-pointer'>Sign in</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SignUp

// import React, { FC, useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../firebase/config';
// import { useRouter } from 'next/navigation';
// import emailjs from 'emailjs-com';
// import { Auth } from '@/interfaces';
// import Cookies from 'js-cookie';

// const SignUp: FC<Auth> = ({ isChange }) => {
//   const router = useRouter();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [enteredCode, setEnteredCode] = useState('');
//   const [isCodeSent, setIsCodeSent] = useState(false);

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); 
//   };

//   const sendVerificationEmail = async (code: string) => {
//     const templateParams = {
//       to_email: email,
//       verification_code: code,
//     };

//     try {
//       await emailjs.send(
//         'service_1f2xmof',
//         'template_2bofuyu', 
//         templateParams,
//         'RAfNxu9gmUA1-mFQw'
//       );
//       setIsCodeSent(true);
//     } catch (error) {
//       console.error('Failed to send verification email:', error);
//     }
//   };

//   const signUp = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       if (res && res.user) {
//         await updateProfile(res.user, { displayName: name });
//         setEmail('');
//         setPassword('');
//         setName('');
//         Cookies.set('dealer', 'dealer', { expires: 7 }); 
//         const code = generateVerificationCode();
//         setVerificationCode(code);
//         sendVerificationEmail(code);
//       } else {
//         console.error('Authentication failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const verifyCode = async () => {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     if (enteredCode === verificationCode) {
//       alert('Successfully signed up and verified!');
//       router.push(`/home/${res.user.uid}`);
//     } else {
//       alert('Invalid verification code. Please try again.');
//     }
//   };

//   return (
//     <>
  
   
//       {!isCodeSent ? (
//           <div className='w-80 h-96 border shadow-2xl rounded-xl flex flex-col items-center justify-between p-6'>
//           <h2 className='text-2xl text-black font-medium'>Sign up</h2>
          
//             <div className='w-full h-44 flex flex-col justify-between'>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
//                 placeholder='Name'
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
//                 placeholder='Email'
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='w-full h-12 bg-white text-black border outline-none pl-2'
//                 placeholder='Password'
//               />
//             </div>
//             <button onClick={signUp} className='w-full h-12 rounded bg-yellow'>
//               <p className='text-lg text-white font-medium'>Sign up</p>
//             </button>
//             <div className='w-full h-6 flex items-center justify-end'>
//           <div className='w-auto h-auto flex'>
//             <p className='text-sm font-medium text-blue-500 cursor-pointer mr-3'>Sign up</p>
//             <p onClick={isChange} className='text-sm text-black font-medium cursor-pointer'>Sign in</p>
//           </div>
//         </div>
//         </div>
      
      
//       ) : (
      
   
//              <div className='w-80 h-52 border rounded  flex flex-col items-center justify-between p-4 '>
//              <h2 className='text-2xl text-black font-medium'>Verification</h2>
//             <div className='w-full h-12 flex flex-col justify-between'>
//               <input
//                 type="text"
//                 value={enteredCode}
//                 onChange={(e) => setEnteredCode(e.target.value)}
//                 className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
//                 placeholder='Enter verification code'
//               />
//             </div>
//             <button onClick={verifyCode} className='w-full h-12 rounded bg-yellow'>
//               <p className='text-lg text-white font-medium'>Verify Code</p>
//             </button>
//           </div>
     
//       )}
    

//       </>
//   );
// };

// export default SignUp;


import React, { FC, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import emailjs from 'emailjs-com';
import { Auth } from '@/interfaces';

const SignUp: FC<Auth> = ({ isChange }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationEmail = async (code: string) => {
    const templateParams = {
      to_email: email,
      verification_code: code,
    };

    try {
      await emailjs.send(
        'service_1f2xmof',
        'template_2bofuyu', 
        templateParams,
        'RAfNxu9gmUA1-mFQw'
      );
      setIsCodeSent(true);
    } catch (error) {
      console.error('Failed to send verification email:', error);
    }
  };

  const signUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res && res.user) {
        await updateProfile(res.user, { displayName: name });
        setEmail('');
        setPassword('');
        setName('');
        const code = generateVerificationCode();
        setVerificationCode(code);
        sendVerificationEmail(code);
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyCode = () => {
    if (enteredCode === verificationCode) {
      alert('Successfully signed up and verified!');
      router.push(`/home/${auth.currentUser?.uid}`);
    } else {
      alert('Invalid verification code. Please try again.');
    }
  };

  return (
<>
      {!isCodeSent ? (
        <div className='w-80 h-96 border shadow-2xl rounded-xl flex flex-col items-center justify-between p-6'>
        <h2 className='text-2xl text-black font-medium'>Sign up</h2>
     
          <div className='w-full h-44 flex flex-col justify-between'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
              placeholder='Name'
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-12 bg-white text-black border rounded outline-none pl-2'
              placeholder='Email'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-12 bg-white text-black border outline-none pl-2'
              placeholder='Password'
            />
          </div>
          <button onClick={signUp} className='w-full h-12 rounded bg-yellow'>
            <p className='text-lg text-white font-medium'>Sign up</p>
          </button>
          <div className='w-full h-6 flex items-center justify-end'>
        <div className='w-auto h-auto flex'>
          <p className='text-sm font-medium text-blue-500 cursor-pointer mr-3'>Sign up</p>
          <p onClick={isChange} className='text-sm text-black font-medium cursor-pointer'>Sign in</p>
        </div>
      </div>
        </div>
      ) : (
        <>
                <div className='w-80 h-52 border rounded  flex flex-col items-center justify-between p-4 '>
             <h2 className='text-2xl text-black font-medium'>Verification</h2>
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
    

    </>
  );
};

export default SignUp;
