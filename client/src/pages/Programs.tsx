import { useState, useEffect } from "react";
import "../style/Programs.css";

interface ProgramsProps {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<ProgramsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
      })
      .catch((error) => console.error("Failed to fetch programs", error));
  }, []);

  return (
    <div>
      {programs.map((program) => (
        <section key={program.id} className="movie-card">
          <figure>
            <figcaption>{program.title}</figcaption>
            <img src={program.poster} alt={program.title} />
            <p>Synopsis : {program.synopsis}</p>
          </figure>
        </section>
      ))}
    </div>
  );
}

export default Programs;
