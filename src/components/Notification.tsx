"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { UserButton } from "@clerk/nextjs";


interface Props {
    
}

const Notification = (props: Props) => {
    
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        <>
      

            <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer fixed top-0 z-50 w-full'>
            {isSignedIn && (
<div className="flex items-center justify-center gap-2">
            <span>{`Welcome to BuyNow ${user.username===null ? "Our beloved Customer" : user.username}`}</span> 
            <UserButton afterSignOutUrl="/"/>
            </div>
            )}
            </div>

       
        </>
    )
}

export default Notification
