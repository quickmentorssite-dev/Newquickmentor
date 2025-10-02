'use client';

import { useEffect } from 'react'; // ✅ Import useEffect

const pdfMapping = {
  '9': {
    'coordinate-geometry': '9-1.pdf',
    'linear-equations': '9-2.pdf',
  },
  '8': {
    'coordinate-geometry': '8-1.pdf',
    'linear-equations': '8-2.pdf',
  },
  '10': {
    'real-numbers': '/10/math/10ma1.pdf',
    'polynomials': '/10/math/10ma2.pdf',
    'pair-of-linear-equations': '/10/math/10ma3.pdf',
    'quadratic-equations': '/10/math/10ma4.pdf',
    'arithmetic-progression': '/10/math/10ma5.pdf',
    'triangles': '/10/math/10ma6.pdf',
    'coordinate-geometry': '/10/math/10ma7.pdf',
    'introduction-to-trigonometry': '/10/math/10ma8.pdf',
    'applications-of-trigonometry': '/10/math/10ma9.pdf',
    'circles': '/10/math/10ma10.pdf',
    'area-related-to-circles': '/10/math/10ma11.pdf',
    'surface-areas-and-volumes': '/10/math/10ma12.pdf',
    'statistics': '/10/math/10ma13.pdf',
    'probability': '/10/math/10ma14.pdf',
    'chemical-reactions': '/10/science/10sc1.pdf',
    'acids-bases-salts': '/10/science/10sc2.pdf',
    'metals-nonmetals': '/10/science/10sc3.pdf',
    'carbon-compounds': '/10/science/10sc4.pdf',
    'life-processes': '/10/science/10sc5.pdf',
    'control-coordination': '/10/science/10sc6.pdf',
    'reproduction': '/10/science/10sc7.pdf',
    'heredity-evolution': '/10/science/10sc8.pdf',
    'light': '/10/science/10sc9.pdf',
    'human-eye': '/10/science/10sc10.pdf',
    'electricity': '/10/science/10sc11.pdf',
    'magnetic-effects': '/10/science/10sc12.pdf',
    'environment': '/10/science/10sc13.pdf'


  }

  // Add other mappings as needed
};

export default function ChapterPage({ params }) {
  const { id, chapterId } = params;

  // ✅ Trigger resize after chapter changes to fix embed width issue
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, [chapterId]);

  const pdfFile = pdfMapping[id]?.[chapterId];

  if (!pdfFile) {
    return <p>PDF not found for this chapter.</p>;
  }

  return (
    <div>
      <h1>Class {id} - Chapter: {chapterId.replace(/-/g, ' ')}</h1>
      <embed
        src={pdfFile}
        type="application/pdf"
        width="100%"
        height="600px"
      />

    </div>
  );
}
