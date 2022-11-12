import Link from "next/link";
import { useRef, useState } from "react";

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

export const Footer = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <footer className="px-4 py-8 md:py-10 md:px-6 lg:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 justify-items-center gap-24">
          <hr className="h-px w-1/2 border-0 bg-slate-200 md:max-w-sm" />
          <div className="px-4">
            <form
              onSubmit={subscribe}
              className="grid w-full max-w-xl grid-cols-1 gap-6"
            >
              <div className="text-center font-serif tracking-tight text-slate-500">
                <h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl mb-4 last:mb-0">
                  Follow my journey
                </h2>
                <p className="mb-4 italic last:mb-0">
                  Get notified about updates and be the first to get early
                  access to the new, safer, and smarter way to archive your
                  files.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="relative">
                  <label>
                    <span className="sr-only">Email address</span>
                    <input
                      name="email"
                      type="email"
                      ref={inputEl}
                      placeholder="jane.doe@example.com"
                      required
                      className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
                    />
                    {message
                      ? message
                      : `I'll only send emails when new content is posted. No spam.`}
                  </label>
                  <button
                    type="submit"
                    className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
                  >
                    <span className="sr-only">Submit</span>
                    <span aria-hidden={true}>&rarr;</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
            Proudly coded by{" "}
            <Link
              className="text-slate-700"
              href="http://houssaineamzil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              houssaineamzil
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
