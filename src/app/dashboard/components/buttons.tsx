import React from "react";

export function LogoText({
  logo,
  text,
}: {
  logo: React.ReactNode;
  text: string;
  verboseLevel: 0 | 1 | 2;
}) {
  return (
    <div className="flex flex-row items-center">
      {logo}
      <p className="ml-2 text-gray-500 text-sm">{text}</p>
    </div>
  );
}

export function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}

export function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}

export function LogoButton({ logo }: { logo: React.ReactNode }) {
  return (
    <header className="inline-flex items-center duration-200 ease-in cursor-pointer rounded-md bg-transparent px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-border hover:bg-muted">
      {logo}
    </header>
  );
}



