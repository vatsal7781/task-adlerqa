import React from "react";

function VisualImpactSection() {
  const text = "Unleash Visual Impact";

  return (
    <section className="relative flex flex-wrap gap-10 py-12 text-7xl font-medium tracking-tighter leading-none text-white uppercase bg-stone-950 max-md:max-w-full max-md:text-4xl overflow-hidden">
      <div className="marquee whitespace-nowrap flex">
        {[...Array(5)].map((_, index) => (
          <h2 key={index} className="mr-10">
            {text}
          </h2>
        ))}
      </div>
    </section>
  );
}

export default VisualImpactSection;
