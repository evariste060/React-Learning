import {useState} from "react"
export default function ToggleOnOf(){
    const [state,changeState] = useState("ON")
    return <div className="flex justify-center">
            <button className="w-24 border border-red-500 bg-blue-700 text-white rounded-full font-semibold " onClick={()=>changeState(state=>state==="ON"?"OFF":"ON")}>{state}</button>
        </div>
}