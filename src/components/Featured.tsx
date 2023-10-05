import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const Featured = (props: Props) => {
    return (
        <div className='px-6 overflow-x-auto overflow-hidden text-red-500 my-6'>
            {/* WRAPPER */}
<div className='w-max flex grid  grid-cols-4 mx-auto gap-4 max-md:grid-cols-1'>
    {/* single items */}
    {featuredProducts.map((item)=>(
<div key={item.id} className="w-[300px]  flex flex-col  items-center justify-center gap-2 p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[300px] xl:h-[370px] bg-gray-200 rounded-lg shadow-lg  hover:shadow-xl max-md:flex-row">
    {/* image container */}

    {/* since image is not required we render it with a condition */}

    {item.img && 
    <div  className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
        <Image src={item.img} alt='' fill className='object-contain max-md:!w-[100px] max-md:!h-[120px]'/>
    </div>
    }
    {/* text container */}
    <div className=" flex-1 flex flex-col gap-4 items-center text-center justify-center">

        <h1 className='text-sm font-bold captalize p-4 xl:text-lg 2xl:text-2xl'>{item.title}</h1>
        {/* <p className='p-4 2xl:p-8'>{item.desc}</p> */}
        <span className='text-xl font-bold '>{`$${item.price}`}</span>
        <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
    </div>

</div>
))}
</div>
        </div>
    )
}

export default Featured
