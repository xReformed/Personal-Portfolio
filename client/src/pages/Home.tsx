import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectArt from "../components/ProjectArt";
import ArrowIcon from "../components/ArrowIcon";
import { projects } from "../data/projects";

// Save a photo as src/assets/portrait.(png|jpg|jpeg|webp) and it is picked up
// automatically. PNG/WebP are treated as transparent cutouts (closest to the
// design); JPGs can't be transparent, so they get a soft vignette instead.
const [portraitPath, portraitSrc] =
  Object.entries(
    import.meta.glob<string>("../assets/portrait.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    }),
  )[0] ?? [];
const portraitIsCutout = !/\.jpe?g$/i.test(portraitPath ?? "");

const headline = ["Building", "products that", "perform", "and inspire"];

const featured = projects
  .filter((p) => p.status !== "side-project")
  .slice(0, 4);

const AUTOPLAY_MS = 5000;

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (delta: number) =>
    setIndex((i) => (i + delta + featured.length) % featured.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % featured.length),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="home-featured flex flex-col gap-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="home-card">
        {featured.map((project, i) => {
          const active = i === index;
          return (
            <article
              key={project.name}
              className="home-slide"
              data-active={active}
              inert={!active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${featured.length}`}
            >
              <ProjectArt
                accent={project.accent}
                className="absolute inset-0"
              />
              <Link
                to="/projects"
                className="home-slide-open"
                aria-label={`View ${project.name}`}
              >
                <ArrowIcon direction="up-right" />
              </Link>
              <div className="home-slide-caption">
                <span
                  className="home-slide-index"
                  style={{ color: project.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{project.name}</h2>
                <p>{project.tech.slice(0, 3).join(" · ")}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {featured.map((project, i) => (
            <button
              key={project.name}
              type="button"
              className="home-dot"
              aria-label={`Show ${project.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="home-arrow"
            aria-label="Previous project"
            onClick={() => go(-1)}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className="home-arrow"
            aria-label="Next project"
            onClick={() => go(1)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

const silhouette = (
  <>
    <ellipse cx="200" cy="168" rx="76" ry="92" />
    <path d="M166 236h68l10 112h-88z" />
    <path d="M18 560c4-128 52-206 136-238 14 10 30 16 46 16s32-6 46-16c84 32 132 110 136 238z" />
  </>
);

const Portrait = () => (
  <div className="home-portrait">
    {portraitSrc ? (
      <div className="home-portrait-frame" data-cutout={portraitIsCutout}>
        <img src={portraitSrc} alt="Meinard" />
      </div>
    ) : (
      <svg
        viewBox="0 0 400 560"
        preserveAspectRatio="xMidYMax meet"
        className="home-portrait-placeholder"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="home-sil-fill"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="76"
            x2="0"
            y2="560"
          >
            <stop offset="0" stopColor="#2a2e2c" />
            <stop offset="1" stopColor="#111312" />
          </linearGradient>
          <linearGradient id="home-sil-rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2dd4a7" />
            <stop offset="1" stopColor="#ff7a1a" />
          </linearGradient>
        </defs>
        {/* Rim is drawn first so the fill covers its inner half */}
        <g fill="none" stroke="url(#home-sil-rim)" strokeWidth="3">
          {silhouette}
        </g>
        <g fill="url(#home-sil-fill)">{silhouette}</g>
      </svg>
    )}
  </div>
);

const Home = () => (
  <div className="home-hero">
    <div className="home-backdrop" aria-hidden="true" />
    <Navbar className="rise" />

    <main className="home-body px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
      <div className="home-stage">
        <Portrait />
        <h1 className="home-headline">
          {headline.map((line, i) => (
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

      <div className="home-aside">
        <p className="home-intro rise" style={{ "--i": 2 } as CSSProperties}>
          I'm Meinard, a full-stack developer building fast, thoughtful web
          apps — from pixel-perfect interfaces to the APIs that power them.
        </p>

        <div className="rise" style={{ "--i": 4 } as CSSProperties}>
          <FeaturedCarousel />
        </div>

        <Link
          to="/contact"
          className="site-cta rise"
          style={{ "--i": 6 } as CSSProperties}
        >
          Let's talk
          <span className="site-cta-dot" aria-hidden="true" />
        </Link>
      </div>
    </main>
  </div>
);

export default Home;
