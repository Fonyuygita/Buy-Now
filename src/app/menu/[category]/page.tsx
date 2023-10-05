import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    
}

const CategoryPage = (props: Props) => {
    return (
        <div className='flex flex-wrap text-red-500'>
            {pizzas.map(items=>(
                <Link key={items.id} className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between  even:bg-fuchsia-50' href={`/product/${items.id}`} >

                    {/* our image container */}
                    {items.img && 
                    <div className='relative h-[80%]'>
                    <Image src={items.img} alt='' fill className='object-contain'/>
                   
                    </div>
                    
                }
                {/* text container */}
                <div className=" flex items-center justify-between font-bold">
                <h1 className='text-2xl uppercase p-2 '>{items.title}</h1>
                <h2>${items.price}</h2>
                <button className='uppercase bg-red-500 text-white p-2 rounded'>Add to Cart</button>
                </div>
                </Link>
            ))}
            
        </div>
    )
}

export default CategoryPage
