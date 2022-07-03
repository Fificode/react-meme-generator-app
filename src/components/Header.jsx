import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-purple-600 h-[65px] px-[15px] py-[20px]">
        <div className='flex items-center'>
            <h2 className='fill-white text-[20px] font-[700] '>Meme Generator</h2>
        </div>
        <div>
<p className="fill-white text-[12px] font-[500]">React Course - Project 3</p>

        </div>
    </div>
  )
}

export default Header