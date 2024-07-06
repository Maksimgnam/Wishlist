'use client'
import React, {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp';



const Auth= () => {
  const [isSignIn , setIsSignIn] = useState<boolean>(false);
  const [isSignUp , setIsSignUp] = useState<boolean>(true);


  const isChange=():void=>{
      setIsSignIn(!isSignIn);
      setIsSignUp(!isSignUp)
  }

  return (
    
    <div className='w-full min-h-screen  flex items-center justify-center'>
      {
        isSignIn &&      <SignIn isChange={isChange}/>
      }
        {
        isSignUp &&       <SignUp isChange={isChange}/>
      }

 

    </div>
  )
}

export default Auth