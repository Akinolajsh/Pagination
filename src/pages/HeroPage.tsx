import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
        <div className='flex bg-white h-[90%] w-[95%] justify-center items-center  flex-col '>
<div className=' flex justify-center items-center mb-[20px] '>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum vel deserunt modi debitis iste explicabo unde!
</div>
<div className=' flex justify-center items-center w-[400px] text-center'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum vel deserunt modi debitis iste explicabo unde!
</div>
<div className='flex justify-between items-center w-[200px]'>
<button className='bg-green-300 w-[90px]'>
    Sign Up
</button>
<button className='bg-green-300 w-[90px]'>
    Sign In
</button>
</div>
        </div>
    </div>
  )
}

export default HeroPage