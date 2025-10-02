// app/class/[id]/math-solution/[chapter]/[exercise]/page.jsx

import { mathSolutions } from '@/data/mathSolution';
import MathExercise from './MathExercise';
import Navbar from '../../../component/Anav';
import Footer from '../../../component/Foot';

export async function generateMetadata({ params }) {
  const { id, chapter, exercise } = params;
  const cleanExercise = exercise.replace(/-/g, ' ');
  const cleanChapter = chapter.replace(/-/g, ' ');
  const fullTitle = `Class ${id} Math Solution - ${cleanChapter} - Exercise ${cleanExercise}`;

  return {
    title: fullTitle,
    description: `NCERT Class ${id} Maths Solutions for ${cleanChapter}, Exercise ${cleanExercise}. Step-by-step answers for all questions based on latest CBSE curriculum.`,
    keywords: [
      `Class ${id} Maths Solution`,
      `${cleanChapter} exercise ${cleanExercise}`,
      `NCERT Class ${id} ${cleanChapter} ex ${cleanExercise}`,
      `real numbers chapter exercise ${cleanExercise} class ${id}`,
      `cbse class ${id} maths ch ${cleanChapter} ex ${cleanExercise}`,
      `ncert solutions class ${id} math chapter ${cleanChapter}`,
      `maths ch ${cleanChapter} ex ${cleanExercise} full solution`,
      `ncert class ${id} maths ${cleanChapter} exercise ${cleanExercise}`
    ],
    alternates: {
      canonical: `https://quickmentors.site/class/${id}/math-solution/${chapter}/${exercise}`,
    },
    openGraph: {
      title: fullTitle,
      description: `Detailed solutions for Class ${id} Maths - ${cleanChapter}, Exercise ${cleanExercise}.`,
      url: `https://quickmentors.in/class/${id}/math-solution/${chapter}/${exercise}`,
      siteName: 'QuickMentors',
      type: 'article',
      images: [
        {
          url: `https://quickmentors.in/images/class-${id}-${chapter}-${exercise}.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
  };
}

export default function ExercisePage({ params }) {
  const { id, chapter, exercise } = params;
  const cleanExercise = exercise.replace(/-/g, ' ');
  const cleanChapter = chapter.replace(/-/g, ' ');
  const exerciseData = mathSolutions?.[id]?.[chapter]?.[exercise];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Navbar />
      <h1 className="text-2xl font-bold mb-2">
        Class {id} Maths Chapter {cleanChapter} - Exercise {cleanExercise}
      </h1>
      <p className="mb-4 text-gray-700">
        Get the latest NCERT solutions for Class {id} Maths Chapter "{cleanChapter}" Exercise "{cleanExercise}".
        These step-by-step solutions help students understand concepts, clarify doubts, and prepare better for exams.
      </p>

      <MathExercise
        id={id}
        chapter={chapter}
        exercise={exercise}
        exerciseData={exerciseData}
      /><Footer />
    </div>
  );
}
