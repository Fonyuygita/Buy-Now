'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

interface Props {

}
const Links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" }
]

const Menu = (props: Props) => {
    // state to open and close our menu items
    const [open, setOpen] = useState(false)
    // temp user
    const user = false;
    return (
        <div className='cursor-pointer'>
            {!open ? (<Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)} />) : (<Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)} />)}
            {open && (

                <div className='bg-red-500 text-white w-full absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8  text-lg z-10 '>
                    {/* MENUS */}
                    {Links.map(item => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                    ))}
                    {!user ? (<Link href="/login" onClick={() => setOpen(false)}>Login</Link>) :
                        (<Link href="/order" onClick={() => setOpen(false)}>Order</Link>)}

                    {/* CART */}
                    <Link href="/cart">
                        <CartIcon />
                    </Link>

                </div >
            )}


        </div>
    )
}

export default Menu
