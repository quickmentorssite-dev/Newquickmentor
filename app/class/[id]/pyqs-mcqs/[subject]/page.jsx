export default function SubjectPage({ params }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to {params.subject.toUpperCase()} PYQs/MCQs</h1>
      <p>Select a chapter from the sidebar to get started.</p>
    </div>
  );
}