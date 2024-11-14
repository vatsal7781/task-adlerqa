import React from 'react';

function NavItem({ label, icon }) {
  return (
    <div className="flex gap-1 self-stretch my-auto whitespace-nowrap text-stone-950">
      <div className="grow my-auto">{label}</div>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-[1.05] w-[21px]" />
    </div>
  );
}

export default NavItem;