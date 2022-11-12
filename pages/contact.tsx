import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Footer, Header, Hero } from "../components";

const Field = ({ label, children }) => {
  return (
    <label>
      <span className="text-sm text-slate-500">{label}</span>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-40 w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Bloggo</title>
        <meta name="title" content="Bloggo | Next.js Blog Template" />
        <meta
          name="description"
          content="A blog template built with next.js by houssaineamzil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <main>
        <section className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
          <div className="mx-auto w-full max-w-xl">
            <form
              action="/api/contact"
              method="post"
              className="grid grid-cols-1 gap-6"
            >
              <InputField label="Name" name="name" placeholder="Jane Doe" />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
              />
              <TextareaField
                label="Message"
                name="message"
                placeholder="Write your message here…"
              />
              <button
                type="submit"
                className="ml-auto inline-flex items-center gap-2"
              >
                Send message{" "}
                <span aria-hidden={true} className="text-xl">
                  &rarr;
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
