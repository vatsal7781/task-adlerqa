import React from 'react';
import FooterColumn from './FooterColumn.jsx';
import FooterBottom from './FooterBottom.jsx';

const footerData = [
  {
    title: "Company",
    items: ["Who Are We"]
  },
  {
    title: "Resources",
    items: ["Blog"]
  },
  {
    title: "WORK",
    items: ["Video", "Shoot", "Post"]
  },
  {
    title: "SERVICES",
    items: ["Video", "Shoot", "Post"]
  },
  {
    title: "Contact",
    items: ["Talk to us", "Collab"]
  }
];

function Footer() {
  return (
    <footer className="flex flex-col px-20 mt-20 w-full text-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1129px] max-md:max-w-full">
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
      </div>
      <div className="flex shrink-0 mt-20 max-w-full h-px bg-stone-950 bg-opacity-20 w-[1260px] max-md:mt-10" />
      <FooterBottom />
    </footer>
  );
}

export default Footer;