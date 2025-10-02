import slugify from 'slugify';
import { notFound } from 'next/navigation';
import allQuestions from '@/lib/allQuestions';
import QuestionClient from './QuestionClient';

export async function generateMetadata({ params }) {
  const slugParam = params?.slug;
  if (!slugParam) return {};

  const parts = slugParam.split('___');
  const idSlugPart = parts.length > 1 ? parts[1] : null;
  if (!idSlugPart) return {};

  const question = allQuestions.find(q => {
    if (!q || !('id' in q)) return false;
    const safeIdSlug = slugify(String(q.id || 'noid'), { lower: true, strict: true });
    return safeIdSlug === idSlugPart;
  });

  if (!question) return {};

  let description = '';
  if (Array.isArray(question.answer)) {
    description = question.answer.map(lineObj => lineObj['=>']).filter(Boolean).join(' ');
  } else {
    description = question.answer || '';
  }

  description = description.slice(0, 160);

  return {
    title: question.question,
    description,
    keywords: [
      question.question,
      'CBSE questions',
      'CBSE answers',
      'exam preparation',
      'MCQ questions',
      'education',
      'NCERT solutions',
      'Class 10 questions',
      'Class 9 questions',
    ],
  };
}

export default function Page({ params }) {
  const slugParam = params?.slug;
  if (!slugParam) return notFound();

  const parts = slugParam.split('___');
  const idSlugPart = parts.length > 1 ? parts[1] : null;
  if (!idSlugPart) return notFound();

  const question = allQuestions.find(q => {
    if (!q || !('id' in q)) return false;
    const safeIdSlug = slugify(String(q.id || 'noid'), { lower: true, strict: true });
    return safeIdSlug === idSlugPart;
  });

  if (!question) return notFound();

  return <QuestionClient question={question} />;
}
