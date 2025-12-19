// DriverForm.jsx
import React, { useState } from 'react';

function DriverForm() {
  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!license) newErrors.license = 'License Number is required';
    if (!phone.match(/^\d+$/)) newErrors.phone = 'Phone must be numeric';
    if (!vehicle) newErrors.vehicle = 'Vehicle type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert(`Driver Registered:\nName: ${name}\nLicense: ${license}\nPhone: ${phone}\nVehicle: ${vehicle}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Driver Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">License Number:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={license}
            onChange={e => setLicense(e.target.value)}
          />
          {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Phone Number:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Vehicle Type:</label>
          <select
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={vehicle}
            onChange={e => setVehicle(e.target.value)}
          >
            <option value="">Select Vehicle</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>
          {errors.vehicle && <p className="text-red-500 text-sm">{errors.vehicle}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors"
        >
          Register Driver
        </button>
      </form>
    </div>
  );
}

export default DriverForm;
