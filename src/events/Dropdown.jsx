import { useState } from "react";
export default function Dropdown(){
    const [isOpen,setIsOpen] = useState(false);
    const toggleDropdown = ()=>setIsOpen(isOpen===false?true:false)
    const option = ["Option 1","Option 2","Option 3","Option 4"]
    return (
        <div className="flex flex-col items-center">
            <button onClick={toggleDropdown} className="text-lg text-green-600 border-2 p-2 cursor-pointer mt-4">Dropdown Menu</button>
            {isOpen?option.map((e,index)=><li key={index}>{e}</li>):''}
        </div>
    )

}