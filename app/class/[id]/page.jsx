import ClientDashboard from './ClientDashboard';

export const metadata = {
  title: "QuickMentors - Free CBSE Notes, PYQs, Solutions & Practice",
  description: "QuickMentors offers free, high-quality CBSE Notes, Previous Year Questions (PYQs), Chapter-wise Exercises, and NCERT Solutions for Class 6 to 12. Learn smarter, score higher!",
  keywords: [
    "QuickMentors",
    "CBSE Notes",
    "Free NCERT Solutions",
    "CBSE PYQs",
    "Class 10 Notes",
    "CBSE Study Material",
    "QuickMentors Education",
    "NCERT Class 10 Math Science",
  ],
  openGraph: {
    title: "QuickMentors - Free CBSE Notes, PYQs, Solutions & Practice",
    description: "Explore CBSE resources for free including notes, PYQs, solutions, and more. QuickMentors is your study partner.",
    url: "https://quickmentors.in",
    siteName: "QuickMentors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickMentors",
    description: "Learn faster with QuickMentors - CBSE Notes, PYQs, and Solutions for free.",
  },
};

export default function Page() {
  return <ClientDashboard />;
}
