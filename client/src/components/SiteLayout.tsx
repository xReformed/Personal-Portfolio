import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { channels } from "../data/contact";

const SiteLayout = () => (
  <div className="site">
    <div className="site-backdrop" aria-hidden="true" />
    <Navbar />
    <main className="flex-1 px-5 sm:px-8 lg:px-12">
      <div className="site-container">
        <Outlet />
      </div>
    </main>
    <footer className="site-footer px-5 sm:px-8 lg:px-12">
      <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Meinard</p>
        <ul className="flex gap-6">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  </div>
);

export default SiteLayout;
