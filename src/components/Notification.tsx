import React from 'react'



interface Props {
    
}

const Notification = (props: Props) => {
    return (
        <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer fixed top-0 z-50 w-full'>
            Free Delivery for all ordes over $50. Order Your food Now
        </div>
    )
}

export default Notification
