import type { CSSProperties } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string[];
  lead?: string;
};

const PageHeader = ({ eyebrow, title, lead }: PageHeaderProps) => (
  <header className="page-header">
    <div>
      <p className="eyebrow rise">{eyebrow}</p>
      <h1 className="page-title">
        {title.map((line, i) => (
          <span
            key={line}
            className="rise block"
            style={{ "--i": i + 1 } as CSSProperties}
          >
            {line}
          </span>
        ))}
      </h1>
    </div>
    {lead && (
      <p
        className="page-lead rise"
        style={{ "--i": title.length + 1 } as CSSProperties}
      >
        {lead}
      </p>
    )}
  </header>
);

export default PageHeader;
