export default function Form(){
    return (
        <form className="mt-12 ">
            <label className="Text-xl">
                Name: <input type="Text" placeholder="Enter your name"  className="border-2"/>
            </label>
            <br/>
            <label>
                Passoword <input type="number" placeholder="Enter your name" className="border-2 mt-1"/>
            </label>
            <br/>
            <button className="border-2 px-2 bg-blue-700 text-white font-bold rounded-2xl">
                Submit
            </button>

        </form>
    )

}