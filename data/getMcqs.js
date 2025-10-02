import { mcqsData } from './mcqsData';

export async function getMcqs(classId, subject, chapter) {
  try {
    const allChapters = mcqsData?.[classId]?.[subject] || {};
    
    // Directly use the chapter slug
    const mcqs = allChapters?.[chapter] || [];

    return mcqs;
  } catch (error) {
    console.error("Error fetching MCQs:", error);
    return [];
  }
}
