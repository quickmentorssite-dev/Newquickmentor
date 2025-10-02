"use client";

import { useParams } from "next/navigation";
import pyqData from "@/lib/pyqData";
import Link from "next/link";

export default function SidebarLayout({ children }) {
  const { id, subject, year } = useParams();
  const pdfList = pyqData[id]?.[subject]?.[year];

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <aside style={{
        width: "300px",
        borderRight: "1px solid #ccc",
        padding: "20px",
        overflowY: "auto"
      }}>
        <h2 style={{ marginBottom: "10px" }}>📚 Papers - {subject} {year}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pdfList?.map((file, idx) => {
            const filename = file.url.split("/").pop().replace(".pdf", "");
            return (
              <li key={idx} style={{ marginBottom: "10px" }}>
                <Link href={`/class/${id}/pyqs-year/${subject}/${year}/${filename}`} style={{ color: "#007bff", textDecoration: "underline" }}>
                  {file.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
