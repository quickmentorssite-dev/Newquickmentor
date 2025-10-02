'use client';

export default function ChapterNotesClient({ pdfPath }) {
  return (
    <div>
      <h2 style={{ color: 'black' }}>Chapter PDF Notes</h2>
      <iframe
        src={pdfPath}
        width="100%"
        height="600px"
        style={{ border: '1px solid #ccc' }}
        title="Notes PDF Viewer"
      />
    </div>
  );
}
