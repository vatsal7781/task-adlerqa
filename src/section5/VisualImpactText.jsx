import React from "react";

function VisualImpactText({ text, width }) {
  return (
    <>
    <h2 
      className={`grow shrink ${width} max-md:max-w-full max-md:text-4xl`}
      aria-label={text}
    >
      {text}
    </h2>
    <div className="overflow-hidden w-full bg-gray-100 p-4">
      <div className="animate-slide whitespace-nowrap text-xl font-semibold text-stone-950">
        {text}
      </div>
    </div>
    </>
  );
}

export default VisualImpactText;