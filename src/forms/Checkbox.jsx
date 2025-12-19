import { useState } from "react";

export default function CheckboxForm() {
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border-2 rounded flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">
        Select Your Hobbies
      </h1>

      <label className="flex gap-2">
        <input type="checkbox" value="Football" onChange={handleChange} />
        Football
      </label>

      <label className="flex gap-2">
        <input type="checkbox" value="Basketball" onChange={handleChange} />
        Basketball
      </label>

      <label className="flex gap-2">
        <input type="checkbox" value="Coding" onChange={handleChange} />
        Coding
      </label>

      <label className="flex gap-2">
        <input type="checkbox" value="Music" onChange={handleChange} />
        Music
      </label>

      <div className="mt-4">
        <h2 className="font-semibold">Selected:</h2>
        <ul className="list-disc list-inside">
          {selected.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
