import {useState} from "react"
export default function Counter(){
    let [count,changeCount] = useState(0)
    return(
        <div className="flex flex-col items-center border mx-[20%] my-4 py-12">
            <p className="text-2xl">{count}</p>
            <div className="flex gap-10">
                <button className="w-24 border border-red-500 bg-blue-700 text-white rounded-full font-semibold " onClick={()=>changeCount(count=>count+1)}>Increment</button>
                <button className="w-24 border border-red-500 bg-blue-700 text-white rounded-full font-semibold" onClick={()=>changeCount(count=>count>0?count-1:count)}>Decrement</button>
            </div>

        </div>
    )
}