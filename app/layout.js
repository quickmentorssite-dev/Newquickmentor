// import "./globals.css";
// import { UserProvider } from "../context/UserContext";
// import FloatingGreeting from "@/app/Components/FloatingGreeting";
// import Script from "next/script";

// // ✅ Global metadata
// export const metadata = {
//   title: "QuickMentors - Free CBSE Notes, PYQs, Solutions & Practice",
//   description:
//     "QuickMentors offers free, high-quality CBSE Notes, Previous Year Questions (PYQs), Chapter-wise Exercises, and NCERT Solutions for Class 6 to 12. Learn smarter, score higher!",
//   keywords: [
//     "QuickMentors",
//     "CBSE Notes",
//     "Free NCERT Solutions",
//     "CBSE PYQs",
//     "Class 10 Notes",
//     "CBSE Study Material",
//     "QuickMentors Education",
//     "NCERT Class 10 Math Science",
//   ],
//   openGraph: {
//     title: "QuickMentors - Free CBSE Notes, PYQs, Solutions & Practice",
//     description:
//       "Explore CBSE resources for free including notes, PYQs, solutions, and more. QuickMentors is your study partner.",
//     url: "https://quickmentors.in",
//     siteName: "QuickMentors",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "QuickMentors",
//     description:
//       "Learn faster with QuickMentors - CBSE Notes, PYQs, and Solutions for free.",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-theme="light">
//       <head>
//         {/* ✅ Fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Geist&family=JetBrains+Mono&display=swap"
//           rel="stylesheet"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="keywords" content={metadata.keywords.join(", ")} />
//         <meta name="description" content={metadata.description} />

//         {/* ✅ OG Tags */}
//         <meta property="og:title" content={metadata.openGraph.title} />
//         <meta
//           property="og:description"
//           content={metadata.openGraph.description}
//         />
//         <meta property="og:url" content={metadata.openGraph.url} />
//         <meta property="og:site_name" content={metadata.openGraph.siteName} />
//         <meta property="og:type" content="website" />

//         {/* ✅ Twitter Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.twitter.title} />
//         <meta name="twitter:description" content={metadata.twitter.description} />

//         {/* ✅ Schema.org JSON-LD */}
//         <Script
//         id="custom-inline-script"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "EducationalOrganization",
//               "name": "QuickMentors",
//               "url": "https://quickmentors.site",
//               "logo": "https://quickmentors.in/logo.png",
//               "description":
//                 "QuickMentors is a free platform offering CBSE Notes, PYQs, Solutions & Study Resources.",
//               "founder": {
//                 "@type": "Person",
//                 "name": "Nishant Keshri",
//               },
//               "sameAs": [
//                 "https://www.instagram.com/quickmentors",
//                 "https://www.youtube.com/@quickmentors"
//               ]
//             }),
//           }}
//         />
//       </head>
//       <body className="font-geist font-mono antialiased light">
//         <UserProvider>
//           <FloatingGreeting />
//           {children}
//         </UserProvider>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import { UserProvider } from "../context/UserContext";
import FloatingGreeting from "@/app/Components/FloatingGreeting";
import { Geist, JetBrains_Mono } from "next/font/google";

// ✅ Import Google Fonts using next/font (no warnings)
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

// ✅ Global metadata
export const metadata = {
  title: "QuickMentors - Free CBSE Notes, PYQs, Solutions & Practice",
  description:
    "QuickMentors offers free, high-quality CBSE Notes, Previous Year Questions (PYQs), Chapter-wise Exercises, and NCERT Solutions for Class 6 to 12. Learn smarter, score higher!",
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
    description:
      "Explore CBSE resources for free including notes, PYQs, solutions, and more. QuickMentors is your study partner.",
    url: "https://quickmentors.in",
    siteName: "QuickMentors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickMentors",
    description:
      "Learn faster with QuickMentors - CBSE Notes, PYQs, and Solutions for free.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${geist.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="description" content={metadata.description} />

        {/* ✅ OG Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />

        {/* ✅ Schema.org JSON-LD (Plain <script> tag, not next/script) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "QuickMentors",
              "url": "https://quickmentors.site",
              "logo": "https://quickmentors.in/logo.png",
              "description":
                "QuickMentors is a free platform offering CBSE Notes, PYQs, Solutions & Study Resources.",
              "founder": {
                "@type": "Person",
                "name": "Nishant Keshri",
              },
              "sameAs": [
                "https://www.instagram.com/quickmentors",
                "https://www.youtube.com/@quickmentors",
              ],
            }),
          }}
        ></script>
      </head>

      <body className="font-geist font-mono antialiased light">
        <UserProvider>
          <FloatingGreeting />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

