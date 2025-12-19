import { useState } from "react"
export default function DisplayInput(){
    const [text,setText] = useState('')
    return (
        <form className=" flex flex-col pl-40" >
            <h1 className="text-lg font-bold">Display Input</h1>
            <label>
                Text:
            <input type="text" className="border-2" placeholder="Enter text" onChange={(e)=>setText(e.target.value)}/>
            </label>
            <h1>Input: {text}</h1>
        </form>
    )
}