'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import pyqChapterData from '@/data/pyqChapterData';
import Navbar from '../../component/Anav';
import Footer from '@/app/Components/Foot';

export default function ChapterSelect() {
  const { id, subject } = useParams();

  const chapterList = pyqChapterData[id]?.[subject]
    ? Object.keys(pyqChapterData[id][subject])
    : [];

  return (
    <>
    <Navbar />
    <div className="chapter-container">
      <h1 className="chapter-title">{subject} Chapters - Class {id}</h1>
      <ul className="chapter-list">
        {chapterList.map((chapter) => (
          <li key={chapter}>
            <Link href={`/class/${id}/pyqs-chapter/${subject}/${chapter}`}>
              <span className="chapter-link">
                {chapter.replace(/-/g, ' ')}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div><Footer /></>
  );
}
