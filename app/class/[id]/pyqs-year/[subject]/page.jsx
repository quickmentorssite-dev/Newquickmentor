"use client";

import { useParams, useRouter } from "next/navigation";
import pyqData from "@/lib/pyqData";
import Footer from '../../component/Foot.jsx';
import Navbar from '../../component/Anav.jsx';

export default function YearSelector() {
  const { id, subject } = useParams();
  const router = useRouter();

  const subjectData = pyqData[id]?.[subject];

  if (!subjectData) {
    return <div className="p-4 text-red-600">❌ No data found for {subject}</div>;
  }

  const years = Object.keys(subjectData);

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📅 Select Year - {subject} Class {id}</h1>
        <div className="card-grid">
          {years.map((year) => (
            <div key={year} className="subject-card card-1">
              <div className="card-content">
                <h2 className="card-title">{year}</h2>
              </div>
              <button
                className="card-button"
                onClick={() => router.push(`/class/${id}/pyqs-year/${subject}/${year}`)}
              >
                →
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
