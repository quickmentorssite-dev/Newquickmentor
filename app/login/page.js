'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

const LoginPage = () => {
  const { setUserData } = useUser();
  const router = useRouter();

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && school && selectedClass) {
      setUserData({ name, school, selectedClass });
      router.push(`/class/${selectedClass}`);
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to QuickMentors 🚀</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Enter your school name" value={school} onChange={(e) => setSchool(e.target.value)} required />
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} required>
          <option value="">Select Class</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
        <button type="submit" style={{ marginTop: '1rem' }}>Continue</button>
      </form>
    </div>
  );
};

export default LoginPage;
