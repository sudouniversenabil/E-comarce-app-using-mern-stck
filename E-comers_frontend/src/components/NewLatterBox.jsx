import React from 'react'

function NewLatterBox() {

    // and also dnot now what is preen defult do 
    const onSubmitDefault=(event)=>{
        event.preventDefault()
        console.log("hallo")
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700 '> subcibe now and get 20& off discount</p>

        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatum commodi, nesciunt eligendi dolor rem mollitia minus expedita, in magnam necessitatibus minima accusantium explicabo sapiente eveniet nemo quasi cum illo.</p>

        {/* i dont know what is onsubmit do */}
        <form onSubmit={onSubmitDefault} className='w-full sm:w-1/2 flex items-center gap-3 my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="text" placeholder='Enter your email' required />
            <button type='Submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewLatterBox