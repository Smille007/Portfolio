/**
 * @copyright 2024 Daryna Vershinina Diaz
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";
/**
 * Primary Button
 */
export const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes,
  }) => {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-primary " + classes}>
          {label}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : null}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-primary " + classes}>
          {label}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : null}
        </button>
      );
    }
  };
  
  ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };
  
  /**
   * Outline Button
   */
  export const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
    classes,
  }) => {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-outline " + classes}>
          {label}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : null}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-outline " + classes}>
          {label}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : null}
        </button>
      );
    }
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };
  

export default {ButtonPrimary, ButtonOutline}
