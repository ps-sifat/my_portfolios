import React from "react";

const Sifat = () => {
  const developer = {
    name: "Md Sifatul Islam",
    title: "Full Stack Developer",
    skills: ["Next.js", "React", "Node.js"],
    experience: "3+",
    projects: "20+",
    passion: "Designing code with clarity and precision",
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-md">
      <h1 className="text-2xl font-bold mb-2">{developer.name}</h1>
      <h2 className="text-lg text-purple-400 mb-4">{developer.title}</h2>

      <p>
        <strong>Experience:</strong> {developer.experience} years
      </p>
      <p>
        <strong>Projects:</strong> {developer.projects}+
      </p>
      <p>
        <strong>Passion:</strong> {developer.passion}
      </p>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Skills:</h3>
        <ul className="list-disc list-inside">
          {developer.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sifat;
