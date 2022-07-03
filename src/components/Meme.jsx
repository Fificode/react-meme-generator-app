import React from 'react'

const Meme = () => {
  return (
    <div>
        <main className='m-[30px]'>
            <form>
                <div className='flex flex-row'>
                    <input type = "text" placeholder='Top Text' className='block w-[100%] border-[1px] border-black p-[10px] rounded-[5px] m-2'/>
                <input type = "text" placeholder='Bottom Text' className='block w-[100%] border-[1px] border-black p-[10px] rounded-[5px] m-2'/>
                </div>
                <button className='block w-[100%] bg-purple-500 my-[30px] mx-[auto] p-[10px] rounded-[5px] cursor-pointer'>Get a new meme image</button>
            </form>
        </main>
    </div>
  )
}

export default Meme