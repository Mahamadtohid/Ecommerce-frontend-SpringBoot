import React from 'react'

function HomeSectionCard() {
  return (
    <div className= 'cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

        <div className = 'h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full'
            src="https://reviewit.pk/wp-content/uploads/2022/05/danishtaimoor16-scaled.jpg" 
            alt = "Danish Taimoor" /> 

        </div>

        <div className='p-4'>
            <h3 className='text-lg fott-medium text-gray-900'>NoFilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Mens Solid Pure Cotton Kurta</p>

        </div>


    </div>
  )
}

export default HomeSectionCard