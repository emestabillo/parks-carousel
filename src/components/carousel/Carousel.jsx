import { parksData } from "../../data/parks";
import styles from "./Carousel.module.scss";
import { useState, useEffect } from "react";
import arrowPrevious from "../../../src/assets/icons/arrow-previous.svg";
import arrowNext from "../../../src/assets/icons/arrow-next.svg";

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
      }, 3000);
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
                    <a href={link} target="_blank" className={styles.link}>
                      learn more
                    </a>
                  </div>
                  <div className={styles.imageContainer}>
                    <img src={src} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.pagingArrows}>
            <button
              className={`${styles.pagingButton} ${styles.previousButton}`}
              onClick={previousSlide}
            >
              <img src={arrowPrevious} />
              Prev
            </button>
            <button
              className={`${styles.pagingButton} ${styles.nextButton}`}
              onClick={nextSlide}
            >
              Next
              <img src={arrowNext} />
            </button>
          </div>
          <div className={styles.pagingDotsContainer}>
            {parksData.map((park, index) => {
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
