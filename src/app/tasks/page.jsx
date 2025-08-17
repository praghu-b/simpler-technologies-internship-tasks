'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import UserCard from '@/components/UserCard'
import Navbar from '@/components/Navbar'

const UserCardPage = () => {
    const router = useRouter();
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center gap-6'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='text-xl font-semibold'>Task 1 - Sign Up Page</h1>
                <a
                    onClick={() => router.push('/signup')}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Go To Sign Up
                </a>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='text-xl font-semibold'>Task 2 - Navigation Bar</h1>
                <Navbar />
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='text-xl font-semibold'>Task 3 - User Card</h1>
                <UserCard name={'Prakash B'} email={'prakashbalan555@gmail.com'} />
            </div>
        </div>
    )
}

export default UserCardPage