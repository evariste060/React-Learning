export default function  CurrentDate(){
    const currentDate = new Date().toLocaleDateString()
    return <h1 className="text-center text-2xl font-bold">{currentDate}</h1>  
}