import React from "react";
import meme from "./memeData.js"
import { useState } from "react";

export default function Form() {

  const [memeImg, setMemeImg] = useState(' ')

let imgEl

   let clicked = () => {
        const rndInt = Math.floor(Math.random() * meme.data.memes.length) 

 
            let newMeme = meme.data.memes[rndInt].url;

            setMemeImg(newMeme)
    
            imgEl.innerHtml = `<img className=" mt-5 px-20 pb-20  w-full " src=${memeImg} alt='af'/>`
        }

        console.log(imgEl);


  return (
  <div>
      <div className="grid grid-cols-2 gap-4     mt-5">
        <input
          className="border p-4 rounded-lg "
          type="text"
          placeholder="top meme"
        />
        <input
          className="border p-4 rounded-lg "
          type="text"
          placeholder="bottom meme"
        />

        <button onClick={clicked} className="col-span-2 bg-purple-500 text-white  mt-5 py-2 hover:bg-purple-700">
          Get new meme image
        </button>
          {imgEl}
  
      </div>
      

  </div>


  );
}
