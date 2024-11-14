import React from 'react';

function TeamMember({ imageSrc, description, name, role }) {
  return (
    <div className="flex flex-col items-start my-auto">
      <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-contain aspect-square w-[70px]" />
      <p className="self-stretch mt-6 text-sm tracking-normal leading-5 text-zinc-900 text-opacity-70">
        {description}
      </p>
      <p className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
        {name}, {role}
      </p>
    </div>
  );
}

export default TeamMember;