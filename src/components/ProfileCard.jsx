export default function ProfileCard({name,email,age}){
    return (
        <div className="border-2 bg-slate-800 text-white font-semibold flex flex-col gap-2 p-2 rounded-2xl mr-[40%] ml-20">
            <h1 className="text-3xl">Profile Card</h1>
            <p>Names: {name}</p>
            <p>Ages: {age}</p>
            <p>Email: {email}</p>

        </div>
    )
}