import type { CSSProperties } from "react";

// Abstract "browser window" preview tinted with a project's accent colour
const ProjectArt = ({
  accent,
  className = "",
}: {
  accent: string;
  className?: string;
}) => (
  <div
    className={`project-art ${className}`}
    style={{ "--accent": accent } as CSSProperties}
    aria-hidden="true"
  >
    <div className="project-art-window">
      <div className="project-art-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-art-lines">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

export default ProjectArt;
