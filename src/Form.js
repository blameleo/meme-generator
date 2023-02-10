import React from "react";

import { useState, useEffect } from "react";

export default function Form() {
  const [memeImg, setMemeImg] = useState();

  // setMemeImg("https://i.imgflip.com/3i7p.jpg")

  // for (let i = 0; i <meme.data.memes.length; i++ ){
  // }

  const [memesArray, setMemesArray] = useState();

  function handleClick() {
    let ranNum = Math.floor(Math.random() * memesArray.length);

    let randomImageUrl = memesArray[ranNum].url;
    setMemeImg(randomImageUrl);
  }

  const [form, setFormData] = useState({
    topMeme: "",
    bottomMeme: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemesArray(data.data.memes);
      });
  }, []);

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="grid grid-cols-2 gap-4     mt-5"
      >
        <input
          className="border p-4 rounded-lg "
          type="text"
          placeholder="top meme"
          name="topMeme"
          value={form.topMeme}
          onChange={handleChange}
        />
        <input
          className="border p-4 rounded-lg "
          type="text"
          placeholder="bottom meme"
          name="bottomMeme"
          value={form.bottomMeme}
          onChange={handleChange}
        />

        <button
          onClick={handleClick}
          className="col-span-2 bg-purple-500 text-white  mt-5 py-2 hover:bg-purple-700"
        >
          Get new meme image
        </button>
      </form>

      <div className="meme mt-10">
        <h1 className="meme--text top">{form.topMeme}</h1>
        <img className="meme--image" src={memeImg} alt="" />
        <h1 className="meme--text bottom">{form.bottomMeme}</h1>
      </div>
    </div>
  );
}
