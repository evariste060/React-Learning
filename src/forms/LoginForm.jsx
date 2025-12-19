
import Button from "../components/CustomizeButton";

export default function Form() {
  return (
    <form
    onSubmit={(e)=>e.preventDefault()}
      className="flex flex-col items-center border-2 gap-4 mx-[10%] mt-10 p-4"
    >
      <h1 className="text-2xl font-bold">USER FORM</h1>

      <div className="flex flex-col gap-2 w-full max-w-md">
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 w-full p-1"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your email"
            className="border-2 w-full p-1"
          />
        </label>

        <Button type="submit" text="Submit"/>
      </div>
    </form>
  );
}
