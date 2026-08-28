const fs = require("fs");

// Resume lines assembled from the repository (kept identical to repo content)
const lines = [
  "Md. Sifatul Islam",
  "Full Stack Developer",
  "Dhaka, Bangladesh",
  "",
  "Contact: mdsifatulislam2357@gmail.com | +880 1850-499490",
  "",
  "Summary:",
  "Passionate Full Stack Developer pursuing B.Sc. in CSE at University of Asia Pacific. Experienced in building modern web applications, responsive UI, and participating in hackathons. Completed professional MERN and Web Design training; seeking internship/junior roles.",
  "",
  "Education:",
  "B.Sc. in Computer Science & Engineering — University of Asia Pacific (2024 – Present) — Pursuing",
  "Diploma in Computer Technology — Patuakhali Polytechnic Institute (2019 – 2023) — CGPA: 3.47 / 4.00",
  "SSC (Science) — Govt. Swarupkathi Pilot Secondary School (2019) — CGPA: 4.33 / 5.00",
  "",
  "Professional Training & Certifications:",
  "Professional MERN Stack Development — Creative IT Institute (Nov 2023 – Nov 2024)",
  "Professional Web Design — Creative IT Institute (Aug 2023 – Nov 2023)",
  "Software Application Course — Postal Academy (2022)",
  "",
  "Technical Skills:",
  "HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, MongoDB, git, Figma, Docker",
  "",
  "Selected Projects:",
  "Food Panda Landing Page — landing page project",
  "Hotel Booking App — responsive React app",
  "QR Code Generator — React + canvas-based QR generator",
  "",
  "Hackathons & Activities:",
  "SUST CSE Carnival 2026 AI Hackathon — Team ASOFT — Participant",
  "",
  "Achievements:",
  "President Scout Award (2018)",
  "MERN Stack Training Completed (2024)",
  "Web Design Training Completed (2023)",
  "Built multiple full-stack projects (2023–2026)",
];

function escapePDF(str) {
  return str.replace(/([\\()])/g, "\\$1");
}

// Build content stream
let content = "BT\n/F1 12 Tf\n50 750 Td\n";
for (let i = 0; i < lines.length; i++) {
  const line = escapePDF(lines[i]);
  content += `(${line}) Tj\n`;
  if (i < lines.length - 1) content += "0 -16 Td\n";
}
content += "ET\n";

const contentBuf = Buffer.from(content, "utf8");

// Helper to create PDF objects and track offsets
let buffers = [];
let offsets = [];
let lengthSoFar = 0;

function addBuffer(b) {
  offsets.push(lengthSoFar);
  buffers.push(b);
  lengthSoFar += b.length;
}

addBuffer(Buffer.from("%PDF-1.4\n%âãÏÓ\n", "binary"));

// 1 obj: Catalog
addBuffer(Buffer.from("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"));
// 2 obj: Pages
addBuffer(
  Buffer.from("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n"),
);
// 3 obj: Page
addBuffer(
  Buffer.from(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
  ),
);
// 4 obj: Font
addBuffer(
  Buffer.from(
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  ),
);
// 5 obj: Content stream
addBuffer(
  Buffer.from(`5 0 obj\n<< /Length ${contentBuf.length} >>\nstream\n`, "utf8"),
);
addBuffer(contentBuf);
addBuffer(Buffer.from("\nendstream\nendobj\n", "utf8"));

// xref start
const xrefStart = lengthSoFar;
let xref = "xref\n0 6\n0000000000 65535 f \n";
for (let i = 1; i <= 5; i++) {
  const off = offsets[i];
  xref += `${String(off).padStart(10, "0")} 00000 n \n`;
}

xref +=
  "trailer << /Size 6 /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF\n";
addBuffer(Buffer.from(xref, "utf8"));

// Write concatenated buffer
const finalBuf = Buffer.concat(buffers);
fs.writeFileSync("resume.pdf", finalBuf);
console.log("resume.pdf written — size:", finalBuf.length);
