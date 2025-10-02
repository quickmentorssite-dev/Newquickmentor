'use client';
import { useParams, useRouter } from 'next/navigation';
import { ncertSolutions } from '@/data/ncertSolutions';

export default function NcertSubjectChapters() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;
  const subject = decodeURIComponent(params.subject); // ✅ Important step

  const subjectData = ncertSolutions[id]?.[subject];
  const chapters = subjectData ? Object.keys(subjectData) : [];

  return (
    <div>
    </div>
  );
}
