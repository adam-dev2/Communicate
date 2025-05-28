import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'

const GoogleLogin = () => {
    const handleGoogleLogin = async()=>{
        const provider = new GoogleAuthProvider();
        const result = signInWithPopup(auth,provider);
        console.log(result);
    }
  return (
    <button className='rounded-2xl bg-zinc-600 text-3xl p-5 cursor-pointer' onClick={handleGoogleLogin}>Login with Google</button>
  )
}

export default GoogleLogin;