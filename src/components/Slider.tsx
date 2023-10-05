"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

// items
const data=[
    {
        id:1,
        title:"Shop our collection of stylish dresses, trendy accessories, and fashion essentials to elevate your wardrobe. Stay ahead of the curve with our handpicked selection of must-have fashion items.",
        image:"/slider1.png"
    },
    {
        id:2,
        title:"Explore our wide range of cutting-edge electronics and gadgets. From smartphones to smart home devices, we have everything you need to embrace the latest in technology and stay connected.",
        image:"/slider2.png"
    },
    {
        id:3,
        title:"Gear up for the game with our premium selection of football jerseys, equipment, and accessories. Show your support for your favorite teams and players with authentic gear that delivers both style and performance.",
        image:"/slider3.png"
    },

    {
        id:4,
        title:"Find the perfect pair of shoes for every occasion. Whether you're looking for comfortable sneakers, elegant heels, or casual boots, our collection offers a variety of styles to suit your taste and elevate your look.",
        image:"/slider4.png"
    },
    {
        id:5,
        title:"Find the perfect pair of shoes for every occasion. Whether you're looking for comfortable sneakers, elegant heels, or casual boots, our collection offers a variety of styles to suit your taste and elevate your look.",
        image:"/slider5.png"
    },

    
    
]

const Slider = () => {
    // usestate to manipulate our slides
    const [currentSlide, setCurrentSlide]=useState(1);

    // create useEffect to manipulate or  vhange our items
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentSlide((prev)=>prev===data.length-1 ? 0 : prev+1)
        },2000)
        // clean interval to avoid memory leaking
        return ()=> clearInterval(interval)
    },[])

    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 mt-[4rem]'>
            {/* TEXT CONTAINER */}
           <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
            <h1 className="text-sm text-center uppercase p-4 md:text-lg xl:text-xl">{data[currentSlide].title}</h1>
            <button className="bg-red-500 text-white py-4 px-8 rounded-md">Order Now</button>
           </div>
           {/* IMAGE CONTAINER */}
           <div className="w-full  relative lg:h-full lg:w-1/2 p-6 shadow-lg  hover:shadow-xl bg-gray-200 flex items-center justify-center">
            <Image src={data[currentSlide].image} alt='' width={260} height={300}  className="object-cover flex items-center mt-9"/>
           </div>
        </div>
    )
}

export default Slider
