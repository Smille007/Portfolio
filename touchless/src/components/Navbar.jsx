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
  const lastActiveLink = useRef(null); // Reference to the currently active link
  const activeBox = useRef(null); // Reference to the active-box element

  // Adjust the position and size of the active-box dynamically
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

  // Initialize the active-box position on mount and updates
  useEffect(() => {
    const initialLink = document.querySelector(".nav-link.active");
    if (initialLink) {
      lastActiveLink.current = initialLink;
      adjustActiveBox(initialLink);
    }
    // Adjust active box on resize
    const handleResize = () => adjustActiveBox(lastActiveLink.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle link click to update active state
  const handleActiveLinkChange = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    adjustActiveBox(event.target); // Update active-box position
  };

  // Navigation items
  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={handleActiveLinkChange}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
