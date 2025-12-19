export default function CustomizeButton({color,text}){
    return <button className={`text-xl rounded-2xl text-${color} bg-amber-600 text-white px-3 font-semibold ml-20 mt-4 cursor-pointer hover:bg-slate-600`} >{text}</button>
}