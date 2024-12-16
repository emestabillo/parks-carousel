import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Carousel.module.scss";
import Button from "../Button/Button";

function Slide({ headline, link, src, index, activeSlideIndex }) {
  const textContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (index === activeSlideIndex) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        textContainerRef.current,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 }
      ).fromTo(
        buttonRef.current,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
        ">-0.8"
      );

      return () => tl.kill(); // Kill animation when the component unmounts or re-renders
    }
  }, [index, activeSlideIndex]);

  return (
    <div
      className={styles.slide}
      aria-hidden={index !== activeSlideIndex}
      tabIndex={index === activeSlideIndex ? -1 : undefined}
    >
      <div className={styles.textContainer}>
        <h3 className={styles.slideHeadline} ref={textContainerRef}>
          {headline}
        </h3>
        <Button
          href={link}
          target="_blank"
          ref={buttonRef}
          className={styles.slideLinkButton}
        >
          learn more<span className="screenReaderOnly">about {headline}</span>
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default Slide;
