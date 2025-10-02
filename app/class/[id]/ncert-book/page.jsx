// /app/class/[id]/ncert-book/page.jsx
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ncertData from '@/data/ncertData';
import './Ncert.css';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx'


export default function NcertBookHome() {
  const { id } = useParams();
  const classContent = ncertData[id];

  if (!classContent) return <div>No NCERT data found for this class.</div>;

  return (
    <>
    <div className="main-container">
      {/* <h1 className="text-2xl font-bold mb-4">Class {id} - NCERT Book Chapters</h1>
      {Object.entries(classContent).map(([subject, chapters]) => (
        <div key={subject} className="sidebar">
          <h2 className="text-xl font-semibold mb-2">{subject}</h2>
          <ul className="list-disc pl-6">
            {chapters.map((chapter) => (
              <li key={chapter.id} className="content">
                <Link
                  href={`/class/${id}/ncert-book/${chapter.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div></>
  );
}
