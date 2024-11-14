import React from 'react';

function LogoItem({ src, alt, className }) {
  return (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
}

export default LogoItem;