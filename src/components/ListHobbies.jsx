export default function ListHobbies({hobbies}){
    return(
        <div className="flex flex-col items-center gap-2 border-2 mx-[20%] rounded-2xl  py-4">
            <h1 className="text-2xl font-semibold">Our hobbies</h1>
            <ul className=" text-xl font-serif">
                {hobbies.map((hobby,index)=>(<li key={index} className="before:content-['*'] before:items-center before:mr-2">{hobby}</li>))}
            </ul>
        </div>
    )
}