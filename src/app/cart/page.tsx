import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[ calc(100vh-9rem)] flex flex-col text-red-500 mt-6 lg:flex-row'>
            {/* product container */}
<div className="h-1/2 p-4 flex flex-col justify-center  overflow-scrol lg:h-full lg:w-2/3 lg:px-20 xl:px-40">

    {/* single item */}
    <div className="flex items-center justify-between mb-4 border-b-2 border-red-200 ">
        <Image src="/temporary/p1.png" alt='' width={100} height={100} className='mb-2'/>
        <div className="">
            <h1 className='uppercase text-xkfont-bold'>Parle G</h1>
            <span >Large</span>
        </div>
        <h2 className='font-bold '>500FRS</h2>
        <span className='cursor-pointer'>X</span>
    </div>

    {/* single item */}
    <div className="flex items-center justify-between mb-4 border-b-2 border-red-200">
        <Image src="/temporary/p1.png" alt='' width={100} height={100} className='mb-2'/>
        <div className="">
            <h1 className='uppercase text-xkfont-bold'>Parle G</h1>
            <span >Large</span>
        </div>
        <h2 className='font-bold '>500FRS</h2>
        <span className='cursor-pointer'>X</span>
    </div>

     {/* single item */}
     <div className="flex items-center justify-between mb-4 border-b-2 border-red-200">
        <Image src="/temporary/p1.png" alt='' width={100} height={100} className='mb-2'/>
        <div className="">
            <h1 className='uppercase text-xkfont-bold'>Parle G</h1>
            <span >Large</span>
        </div>
        <h2 className='font-bold '>500FRS</h2>
        <span className='cursor-pointer'>X</span>
    </div>
</div>
          {/* payement container */}
          <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-5 justify-center uppercase bg-red-80 lg:h-full lg:w-1/3 lg:p-4 lg:px-10 xl:px-10">
            <div className='flex justify-between ring ring-green-400 p-2'>
                <span className="">Subtotal (3 items)</span>
                <span className=''>2300Frs</span>
            </div>
            <div className='flex justify-between ring ring-green-400 p-2'>
                <span className="">Service cost</span>
                <span className=''>50Frs</span>
            </div>

            <div className='flex justify-between ring ring-green-400 p-2'>
                <span className="text-green-400 font-bold">Delivery Cost</span>
                <span className=''>100Frs</span>
            </div>
            <hr  className=''/>
            <button className='bg-red-500 text-white p-3 rounded-md w-1/2'>Checkout</button>
          </div>
        </div>
    )
}

export default page
