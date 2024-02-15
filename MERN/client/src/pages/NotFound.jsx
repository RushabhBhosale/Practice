import React from 'react'

const NotFound = () => {
   return (
      <div className='text-center'>
         <h1 className='mt-24 text-9xl font-bold'>404</h1>
         <div>
            <p className='font-bold my-2'>SORRY! PAGE NOT FOUND</p>
            <p className='w-[500px] font-semibold mx-auto'>Oops! It seems like the page you are trying to find does not exist. if you believe there is an error, feel free to report the issue and we'll look into it.</p>
         </div>
         <div className='flex gap-4 justify-center mt-6'>
            <a href="/"><button className='bg-white font-semibold px-5 py-2 rounded-3xl border-2 border-black '>Return to home</button></a>
            <a href="/contact"><button className='bg-black px-5 py-2 rounded-3xl text-white'>Report problem</button></a>
         </div>
      </div>
   )
}

export default NotFound