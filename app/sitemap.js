// app/sitemap.js
import allQuestions from '@/lib/allQuestions';
import slugify from 'slugify';

const baseUrl = 'https://quickmentors.site';

export default async function sitemap() {
  const urls = [];

  // homepage
  urls.push({
    url: baseUrl + '/',
    lastModified: new Date().toISOString(),
  });

  // static pages
  const staticPaths = [
    '/questions',
    '/class/10/notes',
    '/class/10/mcqs',
    '/class/10/pyqs-chapter',
    '/class/10/pyqs-year',
    '/class/10/ncert-solution',
    '/class/10/chapterwise-exercise',
  ];

  staticPaths.forEach((p) =>
    urls.push({ url: baseUrl + p, lastModified: new Date().toISOString() })
  );

  // dynamic question pages
  if (Array.isArray(allQuestions)) {
    allQuestions.forEach((q) => {
      try {
        const slug = slugify(String(q.question || 'question'), { lower: true, strict: true });
        const idSlug = slugify(String(q.id || ''), { lower: true, strict: true });
        const path = `/questions/${slug}___${idSlug}`;
        urls.push({ url: baseUrl + path, lastModified: new Date().toISOString() });
      } catch (e) {}
    });
  }

  return urls;
}
