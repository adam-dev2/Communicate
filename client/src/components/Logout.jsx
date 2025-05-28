import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


const Logout = () => {
    const handleLogout = async()=>{
        await signOut(auth);
        console.log('logged out successfull');
    }
  return (
    <button className='rounded-2xl bg-zinc-600 text-3xl p-5 cursor-pointer' onClick={handleLogout}>Logout</button>
  )
}

export default Logout