import React from 'react';

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-medium tracking-tighter leading-none uppercase">
        {title}
      </h2>
      <ul className="self-start mt-7 text-base tracking-tight leading-5">
        {items.map((item, index) => (
          <li key={index} className="mb-4">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;