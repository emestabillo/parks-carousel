import styles from "./Button.module.scss";

function Button({ href, children, className = "", ref, ...props }) {
  const ButtonTag = href ? "a" : "button";
  return (
    <ButtonTag
      className={`${styles.button} ${className}`}
      {...(href ? { href } : {})}
      ref={ref}
      {...props}
    >
      {children}
    </ButtonTag>
  );
}

export default Button;
