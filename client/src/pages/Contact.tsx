import type { FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import ArrowIcon from "../components/ArrowIcon";
import { channels, email } from "../data/contact";

// No backend yet: hand the message to the visitor's email app, pre-filled
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name"));
  const from = String(data.get("email"));
  const message = String(data.get("message"));
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const Contact = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title={["Let's build", "something", "together"]}
      lead="Have a project or a role in mind, or just want to say hi? Send a message and I'll get back to you."
    />

    <div className="contact-grid">
      <section aria-labelledby="contact-channels">
        <h2 id="contact-channels" className="section-label">
          <span>01</span>Reach me
        </h2>
        <ul className="mt-6">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                className="channel"
                {...(channel.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <span className="channel-label">{channel.label}</span>
                <span className="channel-value">{channel.value}</span>
                <span className="channel-arrow">
                  <ArrowIcon direction="up-right" size={22} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact-form">
        <h2 id="contact-form" className="section-label">
          <span>02</span>Send a message
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-7">
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows={5} required />
          </label>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button type="submit" className="site-cta">
              Send message
              <span className="site-cta-dot" aria-hidden="true" />
            </button>
            <p className="text-sm text-muted">
              Opens your email app with the message ready to send.
            </p>
          </div>
        </form>
      </section>
    </div>
  </>
);

export default Contact;
