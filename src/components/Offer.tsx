import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

interface Props {
    
}

const Offer = (props: Props) => {
    return (
        <div className='bg-black h-screen flex flex-col md:flex-row md:flex-row md:justify-between md:bg-["/offerBg.png"] md:h-[78vh]'>
            {/* text container */}
           <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
            <h1 className="text-white text-5xl font-bold xl:text-6xl">Buy Now Is Here To make you happy</h1>
            <p className="text-white xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore magnam odit nobis est?</p>
            <CountDown/>
            <button className='bg-red-500 text-white roounded-md py-3 px-6'>Order Now</button>
           </div>

           {/* image container */}
           <div className="relative flex-1 w-full md:h-full">
<Image src="/logoos.png" alt='' fill  className='object-contain'/>
           </div>
        </div>
    )
}

export default Offer
