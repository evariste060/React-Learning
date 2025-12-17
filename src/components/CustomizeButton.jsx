export default function CustomizeButton({color,text}){
    return <button className={`text-xl rounded-3xl bg-${color} text-white p-2 font-semibold ml-20 mt-4 cursor-pointer hover:bg-slate-600`} >{text}</button>
}