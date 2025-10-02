'use client';

import ncertData from '@/data/ncertData';

export default function ChapterViewClient({ id, chapterId }) {
  const classContent = ncertData[id];

  if (!classContent) return <div>Class Not Found</div>;

  let chapter = null;
  for (const subject in classContent) {
    const ch = classContent[subject].find((c) => c.id === chapterId);
    if (ch) {
      chapter = ch;
      break;
    }
  }

  if (!chapter) return <div>Chapter Not Found</div>;

  return (
    <div className="main-content toptext">
      <h2 className="chapter-title">{chapter.title}</h2>
      <iframe
        src={chapter.pdf}
        className="bordered-frame"
        title={chapter.title}
      />
    </div>
  );
}
