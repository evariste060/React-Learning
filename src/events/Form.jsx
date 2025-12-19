import { useState } from "react";
import Button from "../components/CustomizeButton";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   if(name&&email) {
    console.log("Name:", name);
    console.log("Email:", email);
   }
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border-2 gap-4 mx-[10%] mt-10 p-4"
    >
      <h1 className="text-2xl font-bold">USER FORM</h1>

      <div className="flex flex-col gap-2 w-full max-w-md">
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            className="border-2 w-full p-1"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            className="border-2 w-full p-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
}
