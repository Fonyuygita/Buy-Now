import Link from 'next/link'
import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className='h-12 md:h-24  p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between bg-red-100 flex items-center justify-between max-md:flex-col gap-3'>
      <Link href="/" className='font-bold text-xl'>BUY_NOW</Link>
      <p>@ALL RIGHT RESERVED. designed by Gita</p>

        </div>
    )
}

export default Footer
