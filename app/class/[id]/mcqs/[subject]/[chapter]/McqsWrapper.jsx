'use client';
import dynamic from 'next/dynamic';

const McqsClient = dynamic(() => import('./McqsClient'), { ssr: false });

export default function McqsWrapper(props) {
  return <McqsClient {...props} />;
}
