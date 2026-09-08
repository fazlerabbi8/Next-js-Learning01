"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter()
    const goToDashboard = () =>{
        const pass = prompt("enter password");
        if(pass === '1234'){
            router.push('/dashboard')
        }
    }
    return (
        <div>
            <h3 className='mb-3 text-2xl font-semibold'>Welcome to Engineer story</h3>
            <button onClick={goToDashboard} className='px-3 py-2 rounded cursor-pointer text-black hover:bg-sky-400 duration-200'>Go to Dashboard</button>
        </div>
    );
};

export default Banner;