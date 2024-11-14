import React from 'react';

function FooterBottom() {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-8 w-full text-base tracking-normal max-md:max-w-full">
      <div>Copyright ©2023 Red Bangle</div>
      <nav className="flex gap-8">
        <a href="/privacy" className="grow">Privacy Policy</a>
        <a href="/legal">Legal</a>
        <a href="/terms" className="basis-auto">Terms & Conditions</a>
      </nav>
    </div>
  );
}

export default FooterBottom;