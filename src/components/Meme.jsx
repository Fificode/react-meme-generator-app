import React from 'react';

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = React.useState([]);

 React.useEffect(() => {
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes);
  }
  getMemes();
  }, []);


const handleClick = () => {
const randomNumber = Math.floor(Math.random() * allMemes.length);
const url = allMemes[randomNumber].url;
setMeme(prevMeme => ({
  ...prevMeme,
  randomImage : url}
));
 
console.log(url);
};

function handleChange(event) {
  const {name, value} = event.target;
  setMeme(prevMeme => ({ ...prevMeme,
  [name]: value})
     );
}
  return (
    <div>
      <main className='m-[30px]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row w-[100%]'>
            <input type="text" name='topText' value={meme.topText} onChange={handleChange} placeholder='Top Text' className='block w-[100%] border-[1px] border-black p-[10px] rounded-[5px] m-2' />
            <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder='Bottom Text' className='block w-[100%] border-[1px] border-black p-[10px] rounded-[5px] m-2' />
          </div>
         <div className='w-[100%] flex justify-center '> <button onClick={handleClick} className='block w-[100%] bg-purple-500 my-[30px] p-[10px] rounded-[5px] cursor-pointer text-white'>Get a new meme image</button></div>
        </div>
      </main>
      <div className='flex justify-center items-center relative'>
        <img src={meme.randomImage} alt="Meme" className='my-[10px] max-w-[100%] rounded-[3px]' />
        <h2 className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] text-[2em] py-3 mx-0 my-[15px]top-0 text-white translate-y-[-110px] uppercase">{meme.topText}</h2>
                <h2 className="absolute w-[80%] text-center left-[50%] translate-x-[-50%] text-[2em] py-3 mx-0 my-[15px] bottom-0 text-white uppercase">{meme.bottomText}</h2>
        </div>
    </div>
  )
}

export default Meme
