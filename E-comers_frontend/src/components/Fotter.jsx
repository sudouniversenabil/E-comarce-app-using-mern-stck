import React from 'react'
import { assets } from '../assets/assets'

function Fotter() {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis quasi dolor mollitia distinctio quam, et veniam voluptatibus accusamus maiores officiis velit nemo quidem voluptatem! Debitis culpa repellendus quibusdam atque.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li> About us </li>
                    <li> privicy polyci </li>

                </ul>
            </div>
            <div>
                <p className='flex flex-col gap-1 text-gray-400'>GET IN TOUCH</p>
                <ul>
                    <li>
                        0234245432
                    </li>
                    <li>nabilsikder.public@gmail.com</li>
                </ul>
            </div>
            <div className='items-center border-b-teal-400 '>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ forever.</p>
            </div>
        </div>
    )
}

export default Fotter