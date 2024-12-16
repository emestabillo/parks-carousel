import { parksData } from "../../data/parks";
import styles from "./Carousel.module.scss";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const previousSlide = () => {
    const isFirstSlide = activeSlideIndex === 0;
    const newActiveSlide = isFirstSlide
      ? parksData.length - 1
      : activeSlideIndex - 1;
    setActiveSlideIndex(newActiveSlide);
  };

  const nextSlide = () => {
    const isLastSlide = activeSlideIndex === parksData.length - 1;
    const newActiveSlide = isLastSlide ? 0 : activeSlideIndex + 1;
    setActiveSlideIndex(newActiveSlide);
  };

  const navigateToSlide = (activeSlideIndex) => {
    setActiveSlideIndex(activeSlideIndex);
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 10000);
    }

    return () => clearInterval(intervalId);
  }, [activeSlideIndex, isHovered]);

  return (
    <section>
      <div className="container">
        <h2 className="">Disney World Parks</h2>
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={styles.slidesContainer}
            style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
          >
            {parksData.map((park) => {
              const { headline, src, link } = park;
              return (
                <div key={headline} className={styles.slide}>
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
            })}
          </div>
          <div className={styles.pagingContainer}>
            <button className={styles.pagingButton} onClick={previousSlide}>
              <span className="screenReaderOnly">previous slide</span>
              <svg viewBox="0 0 24 24" fill="#FFF" aria-hidden="true">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
            </button>
            {parksData.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    index === activeSlideIndex && styles.activePagingDot
                  } ${styles.pagingDots}`}
                  onClick={() => navigateToSlide(index)}
                ></button>
              );
            })}
            <button className={styles.pagingButton} onClick={nextSlide}>
              <span className="screenReaderOnly">next slide</span>
              <svg viewBox="0 0 24 24" fill="#FFF" aria-hidden="true">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
