import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

interface Props {
    
}

const MenuPage = (props: Props) => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center max-md:gap-6 max-md:mt-[130px] mb-[3rem]'>
        

           {menu.map(category=>(
            <Link key={category.id} href={`/menu/${category.slug}`} className='w-full h-1/3 bg-cover p-8 md:h-1/2' style={{backgroundImage:`url(${category.img})`}}>
<div className={`text-${category.color} w-1//2`}>

    <h1 className='uppercase font-extrabold text-3xl'>{category.title}</h1>
    <p className='text-sm my-8'>{category.desc}</p>
    <button className={`hidden 2xl:block bg-${category.color} text-${category.color==="black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
</div>

            </Link>
           ))}
        </div>
    )
}

export default MenuPage
