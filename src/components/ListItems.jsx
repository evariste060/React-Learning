
export default function ListItems(){
    const courses = ["Python", "JavaScript","Java","React","DJango"]
    return (
       <ul className="ml-12">
        <li className="text-2xl font-semibold">List of items Using Map</li>
        {courses.map((course,index)=><li key={index}>{course}</li>)}
       </ul> 
    )
}