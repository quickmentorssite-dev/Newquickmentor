'use client';
import { useParams, useRouter } from 'next/navigation';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/Note';

export default function ClassDashboard() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const goTo = (section) => {
    router.push(`/class/${id}/${section}`);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <h1>Welcome to Class {id}</h1>
      <button onClick={() => goTo('notes')}>Notes</button>
      <button onClick={() => goTo('pyqs')}>PYQs</button>
      <button onClick={() => goTo('exercises')}>Exercises</button>
      <button onClick={() => goTo('mcqs')}>MCQs</button>
    </div>
  );
}
