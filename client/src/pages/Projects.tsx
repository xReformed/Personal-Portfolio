import PageHeader from "../components/PageHeader";
import ProjectArt from "../components/ProjectArt";
import ArrowIcon from "../components/ArrowIcon";
import CtaBand from "../components/CtaBand";
import { projects, statusLabels } from "../data/projects";

const Projects = () => (
  <>
    <PageHeader
      eyebrow="Work"
      title={["Selected", "work"]}
      lead="Full-stack apps, component libraries, APIs and the occasional side project — built with care from the database up."
    />

    <ul className="work-grid">
      {projects.map((project, i) => (
        <li key={project.name} className="work-card">
          <div className="work-card-art">
            <ProjectArt accent={project.accent} className="absolute inset-0" />
            <span className="work-card-index">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="status-pill" data-status={project.status}>
              {statusLabels[project.status]}
            </span>
            <h2 className="work-card-title">{project.name}</h2>
            <p className="max-w-xl leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} className="text-link">
                View project
                <ArrowIcon direction="up-right" size={15} />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>

    <CtaBand title={["Like what", "you see?"]} />
  </>
);

export default Projects;
