import {useState} from "react"
export default function changeColor() {
    const [hovered, setHovered] = useState(false)
    return (
        <div 
        onMouseOver={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        className={`h-20 mx-[20%]  ${hovered?"bg-green-500":"bg-blue-600"}`}
        >


        </div>
        
    )
}