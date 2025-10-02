// data/getPyqs.js
import { pyqsData } from './pyqsData';

export async function getPyqs(id, subject, chapter) {
  const readableChapter = chapter.replace(/-/g, ' ').toLowerCase();

  const chapterQuestions =
    pyqsData?.[id]?.[subject]?.[chapter] ||
    // fallback if user visits with readable format like "modals"
    Object.entries(pyqsData?.[id]?.[subject] || {}).find(
      ([key]) => key.replace(/-/g, ' ').toLowerCase() === readableChapter
    )?.[1];

  return chapterQuestions || [];
}
