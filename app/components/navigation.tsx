'use client';
import { useScroll } from "../ScrollContext";
import { poppinsMedium } from "../utils/fonts";

 

export function NavBarNavigation() {
  const { homeRef, projectsRef, contactRef, scrollToSection } = useScroll();

  return (
    <ul className={`flex space-x-4 ${poppinsMedium.className}`}>
      <li>
        <button
          onClick={() => scrollToSection(homeRef)}
          className="text-dark-onBackground hover:text-dark-primary transition-colors"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection(projectsRef)}
          className="text-dark-onBackground hover:text-dark-primary transition-colors"
        >
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="text-dark-onBackground hover:text-dark-primary transition-colors"
        >
          Contact
        </button>
      </li>
    </ul>
  );
}