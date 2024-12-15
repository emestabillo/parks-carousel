import { parksData } from "../../data/parks";
import styles from "./Carousel.module.scss";

function Carousel() {
  return (
    <section>
      <div className="container">
        <h2 className="screenReaderOnly">Disney World Parks</h2>
        <div className={styles.carouselWrapper}>
          {parksData.map((park) => {
            const { headline, src, link } = park;
            return (
              <div key={headline}>
                <h3>{headline}</h3>
                <img src={src} />
                <a href={link} target="_blank">
                  learn more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
