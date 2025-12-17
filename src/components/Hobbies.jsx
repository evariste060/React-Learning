import ListHobbies from "./ListHobbies";
export default function Hobbies(){
    const hobbies = ["Football","Basketball","Coding","Music","Playing Games"];
    return(
       (!hobbies || !Array.isArray(hobbies))? <div>No hobbies found</div>:<ListHobbies hobbies={hobbies}/>
    )
}