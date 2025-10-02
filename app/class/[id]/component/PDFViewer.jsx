'use client';

import { useEffect } from 'react';

export default function PDFViewer({ src }) {
  useEffect(() => {
    // Force layout fix after render
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  return (
    <embed
      src={src}
      type="application/pdf"
      width="100%"
      height="600px"
      style={{ border: 'none' }}
    />
  );
}
