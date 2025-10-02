'use client';
import { useState } from 'react';
import Link from 'next/link';
import './layout.css'; // Import the CSS

const notes = {
  10: {
    subjects: {
      Maths: [
        { id: 'real-numbers', title: 'Chapter 1. Real Numbers' },
        { id: 'polynomials', title: 'Chapter 2. Polynomials' },
        { id: 'pair-of-linear-equations', title: 'Chapter 3. Pair of Linear Equations in Two Variables' },
        { id: 'quadratic-equations', title: 'Chapter 4. Quadratic Equations' },
        { id: 'arithmetic-progression', title: 'Chapter 5. Arithmetic Progression' },
        { id: 'triangles', title: 'Chapter 6. Triangles' },
        { id: 'coordinate-geometry', title: 'Chapter 7. Coordinate Geometry' },
        { id: 'introduction-to-trigonometry', title: 'Chapter 8. Introduction to Trigonometry' },
        { id: 'applications-of-trigonometry', title: 'Chapter 9. Some Applications of Trigonometry' },
        { id: 'circles', title: 'Chapter 10. Circles' },
        { id: 'area-related-to-circles', title: 'Chapter 11. Area Related to Circles' },
        { id: 'surface-areas-and-volumes', title: 'Chapter 12. Surface Areas and Volumes' },
        { id: 'statistics', title: 'Chapter 13. Statistics' },
        { id: 'probability', title: 'Chapter 14. Probability' }
      ],
      Science: [
        { id: 'chemical-reactions', title: 'Chapter 1. Chemical Reactions and Equations' },
        { id: 'acids-bases-salts', title: 'Chapter 2. Acids, Bases and Salts' },
        { id: 'metals-nonmetals', title: 'Chapter 3. Metals and Non-Metals' },
        { id: 'carbon-compounds', title: 'Chapter 4. Carbon and its Compounds' },
        { id: 'life-processes', title: 'Chapter 5. Life Processes' },
        { id: 'control-coordination', title: 'Chapter 6. Control and Coordination' },
        { id: 'reproduction', title: 'Chapter 7. How do Organisms Reproduce?' },
        { id: 'heredity-evolution', title: 'Chapter 8. Heredity and Evolution' },
        { id: 'light', title: 'Chapter 9. Light – Reflection and Refraction' },
        { id: 'human-eye', title: 'Chapter 10. Human Eye and Colourful World' },
        { id: 'electricity', title: 'Chapter 11. Electricity' },
        { id: 'magnetic-effects', title: 'Chapter 12. Magnetic Effects of Electric Current' },
        { id: 'environment', title: 'Chapter 13. Our Environment' }
      ],
    },
  },
  // Add other classes...
};

export default function Layout({ children, params }) {
  const { id } = params;
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const classData = notes[id];
  if (!classData) return <div>Invalid Class ID</div>;

  const filteredSubjects = Object.entries(classData.subjects)
    .map(([subject, chapters]) => {
      const filteredChapters = chapters.filter((chapter) =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { subject, chapters: filteredChapters };
    })
    .filter((group) => group.chapters.length > 0);

  return (
    <div className="layout-container">
      <header className="header">
        <button
          className="hamburger"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          &#9776;
        </button>
        <h2>Class {id} Notes</h2>
      </header>

      <div className="content">
        {sidebarVisible && (
          <aside className="sidebar">
            <input className='Search-Subject'
              type="text"
              placeholder="Search chapter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredSubjects.map(({ subject, chapters }) => (
              <div className="subject-group" key={subject}>
                <h3>{subject}</h3>
                <ul>
                  {chapters.map((chapter) => (
                    <li key={chapter.id}>
                      {(() => {
                        const match = chapter.title.match(/Chapter (\d+)/);
                        if (!match) return (
                          <Link
                            href={`/${id}/${chapter.id}`}
                            className="chapter-link"
                          >
                            {chapter.title}
                          </Link>

                        );

                        const chapterNumber = match[1];
                        const pdfPath = `/10/math/10ma${chapterNumber}.pdf`;

                        return (
                          <button
                            className="chapter-link"
                            onClick={() => setSelectedChapter(pdfPath)}
                          >
                            {chapter.title}
                          </button>
                        );
                      })()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {filteredSubjects.length === 0 && (
              <p className="no-chapters">No chapters found</p>
            )}
          </aside>
        )}
        <main className={`main-content ${sidebarVisible ? '' : 'full-width'}`}>
          {selectedChapter ? (
            <iframe
              src={selectedChapter}
              title="Chapter PDF"
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: '90vh' }}
            />
          ) : (
            <p>Select a chapter to view the PDF</p>
          )}
        </main>
      </div>
    </div>
  );
}
