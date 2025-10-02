'use client';

import Link from 'next/link';

export default function NotesPage({ params }) {
  const { id } = params;

  // const notes = {
  //   10: {
  //     chapters: [
  //       {
  //         id: 'coordinate-geometry1',
  //         title: 'Coordinate Geometry',
  //         pdf: '/10-1.pdf',
  //       },
  //       {
  //         id: 'trigonometry',
  //         title: 'Trigonometry',
  //         pdf: '/10-2.pdf',
  //       },
  //     ]
  //   },
  //   9: {
  //     chapters: [
  //       {
  //         id: 'coordinate-geometry1',
  //         title: 'Coordinate Geometry',
  //         pdf: '/9-1.pdf',
  //       },
  //       {
  //         id: 'trigonometry',
  //         title: 'Trigonometry',
  //         pdf: '/9-2.pdf',
  //       },
  //     ]
  //   },
  //   8: {
  //     chapters: [
  //       {
  //         id: 'coordinate-geometry1',
  //         title: 'Coordinate Geometry',
  //         pdf: '/8-1.pdf',
  //       },
  //       {
  //         id: 'trigonometry',
  //         title: 'Trigonometry',
  //         pdf: '/8-2.pdf',
  //       },
  //     ]
  //   }
  // };

  // 🔧 Define classData properly
  const classData = notes[id];

  if (!classData) {
    return <div>Invalid Class ID</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
    </div>
  );
}
