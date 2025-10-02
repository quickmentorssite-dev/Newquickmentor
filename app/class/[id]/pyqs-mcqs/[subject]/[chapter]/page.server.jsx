import ChapterPage from './page';
import { getMcqs } from '@/data/getMcqs';

export default async function Page({ params }) {
  const { id, subject, chapter } = params;
  const questions = await getMcqs(id, subject, chapter);

  return (
    <ChapterPage
      id={id}
      subject={subject}
      chapter={chapter}
      questions={questions}
    />
  );
}
