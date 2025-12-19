import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    card: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border-2 rounded flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold text-center">Multi-Step Form</h1>
      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-2 p-2"
            value={formData.name}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={nextStep}
            className="bg-blue-600 text-white py-2 rounded"
          >
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className="border-2 p-2"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <input
            type="text"
            name="card"
            placeholder="Enter card number"
            className="border-2 p-2"
            value={formData.card}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </form>
  );
}
