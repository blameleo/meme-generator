import React from "react"
import troll from "./troll.png"


let list = [
1,2
]

list.map((single)=> {
return single;
})

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-gradient-to-r from-violet-700 via-purple-700 to-purple-400 text-white px-12 py-8">
        <div className="flex items-center">
        <img className="mr-4 w-10 h-10" src={troll} alt="logo"/>
        <h1 className="font-bold">Meme Generator</h1>

        </div>

        <p>React Course - Project 3</p>

        </header>
    )
}