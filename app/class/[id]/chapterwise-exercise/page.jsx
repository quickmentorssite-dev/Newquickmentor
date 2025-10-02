import SubjectSelection from './SubjectSelection';

export async function generateMetadata({ params }) {
  const { id } = params || {};
  const classId = id || '10';

  return {
    title: `Class ${classId} Important Questions - Chapterwise with Solutions | CBSE`,
    description: `Explore Class ${classId} Important Questions chapterwise with detailed solutions for Science, Social Science, Mathematics, and more. Prepare for board exams with confidence.`,
    keywords: `Class ${classId} Important Questions, Chapterwise Important Questions, CBSE Important Questions Solutions, Class ${classId} Board Exam Preparation, Class ${classId} Science Important Questions, Class ${classId} Maths Important Questions, Class ${classId} SST Important Questions`,
  };
}

export default function ChapterwiseExercisePage() {
  return <SubjectSelection />;
}
