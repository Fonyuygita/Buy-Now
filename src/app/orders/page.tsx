import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='border-seperate border-spacing w-full'>

                <thead>

                    <tr className='text-left'>
                        <th className='hidden  md:block'>Order ID</th>
                        <th>Data</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base bg-red-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='hidden md:block py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>

                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>2324546576</td>
                        <td className='py-6 px-1'>17-08-2023</td>
                        <td className='py-6 px-1'>3400</td>
                        <td className='py-6 px-1'>Parle G, Loly-Pop, Juice, Tangui</td>
                        <td className='py-6 px-1'>On the Way</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default page
