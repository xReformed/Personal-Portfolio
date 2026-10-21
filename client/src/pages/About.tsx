import type { CSSProperties } from "react";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";

const strengths = [
  {
    title: "Backend Development",
    description: "Building robust APIs and server infrastructure",
    value: 8,
  },
  {
    title: "UI/UX Design",
    description: "Keen eye for detail, layout, and user experience",
    value: 9,
  },
  {
    title: "Problem Solving",
    description: "Can debug for hours without losing focus",
    value: 7,
  },
  {
    title: "Communication",
    description: "Translating tech concepts for any audience",
    value: 8,
  },
  {
    title: "Frontend Development",
    description: "React, TypeScript, modern web technologies",
    value: 9,
  },
  {
    title: "Adaptability",
    description: "Quick to learn new frameworks and languages",
    value: 8,
  },
  {
    title: "Creativity",
    description: "Finding elegant solutions to complex problems",
    value: 7,
  },
];

const toolkit = [
  { name: "React", level: 3 },
  { name: "Node.js", level: 3 },
  { name: "Express", level: 3 },
  { name: "MongoDB", level: 3 },
  { name: "Prisma", level: 3 },
  { name: "TypeScript", level: 3 },
  { name: "Git", level: 2 },
  { name: "CSS", level: 2 },
];

const levelLabels: Record<number, string> = {
  1: "Familiar",
  2: "Proficient",
  3: "Advanced",
};

const About = () => (
  <>
    <PageHeader
      eyebrow="About"
      title={["Building", "things that", "matter"]}
      lead="Full-stack developer working across the MERN stack — MongoDB, Express, React and Node.js — with Prisma as my ORM of choice."
    />

    <section className="page-section" aria-labelledby="about-profile">
      <h2 id="about-profile" className="section-label">
        <span>01</span>Profile
      </h2>
      <div className="space-y-6">
        <p className="profile-statement">
          I'm a full-stack developer with a passion for building things that
          matter, crafting applications that are both functional and visually
          compelling.
        </p>
        <p className="max-w-2xl leading-relaxed text-muted">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, and keeping up with the ever-changing
          JavaScript ecosystem.
        </p>
      </div>
    </section>

    <section className="page-section" aria-labelledby="about-strengths">
      <h2 id="about-strengths" className="section-label">
        <span>02</span>Strengths
      </h2>
      <ul className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {strengths.map((s, i) => (
          <li key={s.title} className="strength">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="strength-title">{s.title}</h3>
              <span className="strength-score">
                {s.value}
                <span>/10</span>
              </span>
            </div>
            <p className="strength-description">{s.description}</p>
            <div
              className="meter"
              role="meter"
              aria-valuenow={s.value}
              aria-valuemin={0}
              aria-valuemax={10}
              aria-label={`${s.title}: ${s.value} out of 10`}
            >
              <span
                style={
                  {
                    width: `${s.value * 10}%`,
                    "--i": i,
                  } as CSSProperties
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section className="page-section" aria-labelledby="about-toolkit">
      <h2 id="about-toolkit" className="section-label">
        <span>03</span>Toolkit
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {toolkit.map((tool) => (
          <li key={tool.name} className="tool">
            <span className="tool-name">{tool.name}</span>
            <span className="tool-level">
              <span className="tool-dots" aria-hidden="true">
                {[1, 2, 3].map((n) => (
                  <span key={n} data-filled={n <= tool.level} />
                ))}
              </span>
              {levelLabels[tool.level]}
            </span>
          </li>
        ))}
      </ul>
    </section>

    <CtaBand />
  </>
);

export default About;
