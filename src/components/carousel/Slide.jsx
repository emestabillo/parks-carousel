import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Carousel.module.scss";
import Button from "../Button/Button";

function Slide({ headline, link, src, index, activeSlideIndex }) {
  const textContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const isActive = index === activeSlideIndex;

  useEffect(() => {
    if (index === activeSlideIndex) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        ">-.7"
      );
    }
  }, [index, activeSlideIndex]);
  return (
    <div
      key={headline}
      className={styles.slide}
      aria-hidden={index !== activeSlideIndex}
      tabIndex={isActive ? -1 : undefined}
    >
      <div className={styles.textContainer}>
        <h3 className={styles.headline} ref={textContainerRef}>
          {headline}
        </h3>
        <Button href={link} target="_blank" ref={buttonRef}>
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
