import styles from "./Carousel.module.scss";
import Button from "../Button/Button";

function Slide({ headline, link, src, index, activeSlideIndex }) {
  const isActive = index === activeSlideIndex;
  return (
    <div
      key={headline}
      className={styles.slide}
      aria-hidden={index !== activeSlideIndex}
      tabIndex={isActive ? -1 : undefined}
    >
      <div className={styles.textContainer}>
        <h3 className={styles.headline}>{headline}</h3>
        <Button href={link} target="_blank">
          learn more
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default Slide;
