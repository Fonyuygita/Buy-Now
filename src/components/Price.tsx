"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {

    // state to manipulate our price
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    // useEffect to clculated our a,ount based on the quantity and options selected
    useEffect(()=>{

setTotal(quantity*(options ? price + options[selected].additionalPrice : price))

    },[quantity, selected, options, price])
    return (

        <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-3xl'>${total.toFixed(2)}</h2>
            {/* OPTIONS CONTAINER */}
            {/* for each options, we are going to create a button */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button className='p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]' key={option.title} 
                    style={{ background: selected === index ? "red" : "white",
                     color: selected == index ? "white" : "red" }}
                     onClick={()=>setSelected(index)}
                     >{option.title}</button>
                ))}
            </div>

            {/* QUANTITY CONTAINER  and Add btn*/}
            <div className="flex justify-between items-center">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span>Quantity</span>
                    <div className="flex gap-4 items-center">
                        <button className=''
                         onClick={()=>setQuantity(prev=>(prev >1 ? prev-1 : 1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={()=>setQuantity(prev=>(prev<9 ? prev+1 : 9))}>{'>'}</button>
                    </div>
                </div>

            </div>
            {/* cart button */}
            <button className='uppercase bg-red-500 text-white p-3 w-56 ring-1 ring-red-500'>Add to Cart</button>
        </div>

    )
}

export default Price
