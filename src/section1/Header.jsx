import React from "react";

function Header() {
  return (
    <header>
      <h1 className="text-8xl font-medium tracking-tighter leading-none uppercase text-stone-950 max-md:max-w-full max-md:text-4xl">
        We are a
      </h1>
      <div className="flex flex-wrap gap-7 items-center mt-4 text-8xl font-medium tracking-tighter leading-none uppercase whitespace-nowrap max-md:text-4xl">
        <span className="self-stretch my-auto text-stone-950 max-md:text-4xl">
          Global
        </span>
        <span className="self-stretch my-auto text-red-600 max-md:max-w-full max-md:text-4xl">
          Production
        </span>
      </div>
      <h2 className="text-8xl font-medium tracking-tighter leading-none uppercase text-stone-950 max-md:text-4xl">
        AGENCY
      </h2>
    </header>
  );
}

export default Header;