export async function generateMetadata({ params }) {
  const { id, subject } = params || {};

  const classId = id || '10';
  const subjectName = subject ? capitalize(subject) : 'Notes';

  const title = `${subjectName} Class ${classId} Notes | CBSE NCERT Free PDF`;
  const description = `Download free CBSE Class ${classId} ${subjectName} notes. Chapter-wise NCERT-based notes, revision material, important questions, and printable PDFs. Perfect for board exam preparation.`;

  const keywords = [
    `${subjectName} Class ${classId} Notes`,
    `Class ${classId} ${subjectName} Notes`,
    `CBSE Class ${classId} ${subjectName} Notes`,
    `NCERT Class ${classId} ${subjectName} Notes`,
    `Class ${classId} ${subjectName} chapter-wise Notes`,
    `Free ${subjectName} Notes for Class ${classId}`,
    `${subjectName} Notes PDF Class ${classId}`,
    `${subjectName} Important Questions Class ${classId}`,
    `${subjectName} Revision Notes Class ${classId}`,
    `Science Class 10 Notes`,
    `SST Class 8 Notes`,
    `CBSE Notes Class ${classId}`,
    `Board Exam Notes Class ${classId}`,
    `NCERT Revision Notes Class ${classId}`
  ].join(', ');

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://your-domain.com/class/${classId}/notes/${subject}`,
      siteName: 'QuickMentors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function SubjectDefaultPage() {
  return (
    <div className='toptext' style={{ padding: '2rem', color: 'black' }}>
      <h2>Chapter Notes</h2>
      <p style={{ maxWidth: '700px', marginBottom: '1rem' }}>
        You are viewing <strong>Class Notes</strong> for your selected subject. Please select a chapter from the sidebar to access detailed, chapter-wise NCERT-based notes along with important exam pointers and easy explanations.
      </p>
      <h3>Please select a chapter from the sidebar.</h3>
    </div>
  );
}

function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
