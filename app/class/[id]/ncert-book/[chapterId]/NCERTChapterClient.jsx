'use client';

import ncertData from '@/data/ncertData';

export default function NCERTChapterClient({ params }) {
  const { id, chapterId } = params;
  const classContent = ncertData[id];

  if (!classContent) {
    return <div>Class not found</div>;
  }

  let chapter = null;
  let subject = null;

  // 🔍 Search through subjects in the class
  for (const subj in classContent) {
    const found = classContent[subj].find((ch) => ch.id === chapterId);
    if (found) {
      chapter = found;
      subject = subj;
      break;
    }
  }

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="chapter-title">{chapter.title}</h2>
      <p><strong>Subject:</strong> {subject}</p>
      <iframe
        src={chapter.pdf}
        width="100%"
        height="1900px"
        className="bordered-frame"
        style={{ width: '80vw', height: '120vh' }}
      />
    </div>
  );
}
