import React from 'react'

const About = () => {
  return (
    <div className='h-dvh flex flex-col pt-28 pb-4 px-4' >
      <div className='size-full rounded-lg bg-black/20 relative overflow-hidden border-2 border-pink/20 shadow-black hover:shadow-xl' >
        <div className='top-0 absolute w-full h-[2.5vw] bg-mantle flex justify-end items-center gap-[1vw] px-[1vw]' >
          <div className='absolute left-0 mx-[1vw] text-subtext0' >kitty ~</div>
            <div className='size-[1vw] bg-yellow rounded-full' ></div>
            <div className='size-[1vw] bg-mauve rounded-full' ></div>
            <div className='size-[1vw] bg-red rounded-full' ></div>
        </div>
      </div>
    </div>
  )
}

export default About