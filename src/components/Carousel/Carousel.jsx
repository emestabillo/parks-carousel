import { parksData } from "../../data/parks";
import styles from "./Carousel.module.scss";
import { useState, useEffect } from "react";
import Slide from "./Slide";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const previousSlide = () => {
    const isFirstSlide = activeSlideIndex === 0;
    const newActiveSlide = isFirstSlide
      ? parksData.length - 1 // If it's the first slide, go to the last slide
      : activeSlideIndex - 1; // Otherwise, go to the previous slide
    setActiveSlideIndex(newActiveSlide);
  };

  const nextSlide = () => {
    const isLastSlide = activeSlideIndex === parksData.length - 1;
    const newActiveSlide = isLastSlide
      ? 0 // If it's the last slide, go back to the first slide
      : activeSlideIndex + 1; // Otherwise, go to the next slide
    setActiveSlideIndex(newActiveSlide);
  };

  // Navigate to a specific slide
  const navigateToSlide = (activeSlideIndex) => {
    setActiveSlideIndex(activeSlideIndex);
  };

  // Interval to automatically move to the next slide every 10 seconds
  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 10000);
    }

    // Clean up the interval when the component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, [activeSlideIndex, isHovered]);

  return (
    <section>
      <div className="container">
        <h2 className={styles.sectionHeading}>Disney World Parks</h2>
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovered(true)} // Pause auto-sliding on hover
          onMouseLeave={() => setIsHovered(false)} // Resume auto-sliding when not hovering
        >
          <div
            className={styles.slidesContainer}
            style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
          >
            {parksData.map((park, index) => {
              const { headline, src, link } = park;
              return (
                <Slide
                  key={headline}
                  headline={headline}
                  link={link}
                  src={src}
                  index={index}
                  activeSlideIndex={activeSlideIndex}
                />
              );
            })}
          </div>

          <div className={styles.controls}>
            {/* Previous slide button */}
            <button className={styles.arrowButton} onClick={previousSlide}>
              <span className="screenReaderOnly">previous slide</span>
              <svg viewBox="0 0 24 24" fill="#FFF" aria-hidden="true">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
            </button>

            {/* Paging dots */}
            {parksData.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${styles.pagingDots} ${
                    index === activeSlideIndex ? styles.activePagingDot : ""
                  }`}
                  onClick={() => navigateToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlideIndex ? "true" : undefined}
                ></button>
              );
            })}

            {/* Next slide button */}
            <button className={styles.arrowButton} onClick={nextSlide}>
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
