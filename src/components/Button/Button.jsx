/* eslint-disable react/prop-types */
import styles from "./Button.module.scss";

function Button({ href, children, className = "", ...props }) {
  const ButtonTag = href ? "a" : "button";
  return (
    <ButtonTag
      className={`${styles.button} ${className}`}
      {...(href ? { href } : {})}
      {...props}
    >
      {children}
    </ButtonTag>
  );
}

export default Button;
