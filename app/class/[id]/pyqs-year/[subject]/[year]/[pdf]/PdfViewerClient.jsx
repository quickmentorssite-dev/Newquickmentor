'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PdfViewerClient() {
  const params = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState('');
  const [seoText, setSeoText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!params || typeof params !== 'object') {
      setError('Invalid route parameters.');
      return;
    }

    const { id, subject, year, pdf } = params;

    if (!subject || !year || !pdf || typeof pdf !== 'string') {
      setError('❌ Missing one or more required URL parameters.');
      return;
    }

    const subjectCapitalized = subject.charAt(0).toUpperCase() + subject.slice(1);
    const setNumber = pdf.split('-').pop();
    const fileName = `${pdf}.pdf`;

    const url = `/pyqs-data/${subject.toLowerCase()}/${year}/${fileName}`;
    setPdfUrl(url);

    setTitle(`CBSE Class ${id} ${subjectCapitalized} ${year} – Set ${setNumber}`);
    setSeoText(
      `Download the official CBSE Class ${id} ${subjectCapitalized} Set ${setNumber} ${year} Board Exam Question Paper in PDF format for free. Great for practice, revision, and board preparation.`
    );
  }, [params]);

  if (error) {
    return <div className="text-red-500 p-4 text-center">{error}</div>;
  }

  if (!pdfUrl) {
    return <div className="text-blue-500 p-4 text-center">Loading PDF...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50">
      {/* 📘 SEO-Boosted Title */}
      <h1 className="mt-6 mb-2 text-xl md:text-2xl font-bold text-center text-gray-900">
        {title}
      </h1>

      {/* ✅ SEO Description */}
      <div className="p-4 text-center text-base md:text-lg font-medium text-gray-800 bg-gray-100 w-full border-y border-gray-300">
        {seoText}
      </div>

      {/* 📄 PDF Viewer Container */}
      <div className="pyqsPdf h-[calc(100vh-70px)] mt-4 shadow-lg border rounded-md overflow-hidden">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          style={{ width: '80vw', height: '80vh' }}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
