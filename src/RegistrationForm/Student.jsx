// StudentForm.jsx
import React, { useState } from 'react';

function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentID, setStudentID] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email';
    if (!studentID.match(/^[a-zA-Z0-9]+$/)) newErrors.studentID = 'Student ID must be alphanumeric';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert(`Student Registered:\n${firstName} ${lastName}\nEmail: ${email}\nID: ${studentID}\nDOB: ${dob}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">First Name:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Last Name:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Student ID:</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={studentID}
            onChange={e => setStudentID(e.target.value)}
          />
          {errors.studentID && <p className="text-red-500 text-sm">{errors.studentID}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Date of Birth:</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={dob}
            onChange={e => setDob(e.target.value)}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
        >
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
