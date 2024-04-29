import React from 'react'

function ContentResults() {
  return (
    <div className='md:absolute w-full md:w-[16rem] h-96 md:h-2/4 bg-gradient-to-b from-color1 via-color2 to-color3 md:rounded-3xl xs:rounded-b-3xl text-center md:left-[32%] '>
     <div className='mt-6'>
     <h3 className='text-[#CDC3FF] text-md'>Your Result</h3>
        <div className='bg-gradient-to-b from-color4 to-color2 h-32 w-32 md:ml-16 ml-[8rem] mt-3 md:mt-5 rounded-full flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl font-bold'>76</h1>
          <p className=' text-xs font-medium text-[#8576FE] mt-1'>of 100</p>

      </div>
      <div className='mt-6'>
      <h1 className='text-white font-medium text-2xl'>Great</h1>
      <p className='mt-4 text-xs text-[#A8A5FD] w-44 ml-10'>You scored higher than 65% of
        the people who have taken these tests.
      </p>
      </div>
     </div>
    </div>
  )
}

export default ContentResults