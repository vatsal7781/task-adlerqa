import React from 'react';
import NavItem from './NavItem.jsx';
import GetStartedButton from './GetStartedButton.jsx';
import NavLogo from './media/NavLogo.png'
const navItems = [
  { label: 'Services', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwLXJpZ2h0Ij48cGF0aCBkPSJNNyA3aDEwdjEwIi8+PHBhdGggZD0iTTcgMTcgMTcgNyIvPjwvc3ZnPg==' },
  { label: 'Work', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwLXJpZ2h0Ij48cGF0aCBkPSJNNyA3aDEwdjEwIi8+PHBhdGggZD0iTTcgMTcgMTcgNyIvPjwvc3ZnPg==' },
  { label: 'ABOUT', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWRvd24tcmlnaHQiPjxwYXRoIGQ9Im03IDcgMTAgMTAiLz48cGF0aCBkPSJNMTcgN3YxMEg3Ii8+PC9zdmc+' }
];

function Header() {
  return (
    <header className="md:mt-5 md:ml-[90px] flex flex-wrap gap-5 justify-between items-start self-center w-full text-sm font-semibold leading-none uppercase max-w-[1700px] max-md:max-w-full">
      <img loading="lazy" src={NavLogo} alt="Company logo" className="object-contain shrink-0 max-w-full aspect-[5.49] w-[209px] md:mt-[20px] " />
      <nav className=" flex flex-wrap gap-10 items-center mt-2.5 max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} icon={item.icon} />

        ))}
        <GetStartedButton />

      </nav>
    </header>
  );
}

export default Header;