import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={'Us'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-125' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-4 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione incidunt nisi laborum est explicabo deserunt alias neque veritatis? Pariatur officia ut consequatur hic veritatis!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo rerum ratione ut aperiam dolore assumenda in saepe itaque aspernatur qui excepturi, perferendis, eum vel voluptatum debitis! Reiciendis, alias. Repellat, aliquam?</p>
        <b className='text-gray-500'>Our mission </b>
      <p>apnake foker banano</p>
        </div>
      </div>
    </div>
  )
}

export default About