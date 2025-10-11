'use client';
import React, { useState } from 'react';
import { useUser } from '@/context/UserContext.js';
import { useRouter } from 'next/navigation'; // ✅ Import router

const LoginModal = ({ close }) => {
  const { setUser } = useUser();
  const router = useRouter(); // ✅ useRouter hook

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !school || !selectedClass) return;

    // ✅ Save user data
    setUser({ name, school, selectedClass });

    // ✅ Close modal
    close();

    // ✅ Redirect to class page
    router.push(`/class/${selectedClass}`);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2 className='info'>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="School Name"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
