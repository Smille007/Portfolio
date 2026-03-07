/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Node Modules
 **/ 
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const adjustActiveBox = (link) => {
    if (link && activeBox.current) {
      const linkRect = link.getBoundingClientRect();
      const parentRect = link.parentElement.getBoundingClientRect();

      activeBox.current.style.top = `${linkRect.top - parentRect.top}px`;
      activeBox.current.style.left = `${linkRect.left - parentRect.left}px`;
      activeBox.current.style.width = `${linkRect.width}px`;
      activeBox.current.style.height = `${linkRect.height}px`;
    }
  };

  useEffect(() => {
    const initialLink = document.querySelector(".nav-link.active");

    if (initialLink) {
      lastActiveLink.current = initialLink;
      adjustActiveBox(initialLink);
    }

    const handleResize = () => adjustActiveBox(lastActiveLink.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleActiveLinkChange = (event) => {
    const target = event.target.getAttribute("href");
    const section = document.querySelector(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
      lastActiveLink.current.removeAttribute("aria-current");
    }

    event.target.classList.add("active");
    event.target.setAttribute("aria-current", "page");
    lastActiveLink.current = event.target;

    adjustActiveBox(event.target);
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav
      id="primary-navigation"
      className={`navbar ${navOpen ? "active" : ""}`}
      aria-label="Primary navigation"
    >
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={handleActiveLinkChange}
          aria-current={label === "Home" ? "page" : undefined}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox} aria-hidden="true"></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
