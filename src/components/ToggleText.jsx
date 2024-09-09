import React, { useRef, useState } from "react";
import styles from "../styles/ToggleText.module.css";

function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(0.1);

  function showText() {
    const animationDuration = `${duration}s`;
    textRef.current.style.transition = `all ${animationDuration} ease`;
    if (isVisible) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "scale(0)";
    } else {
      textRef.current.style.opacity = "1";
      textRef.current.style.transform = "scale(1)";
    }
    setIsVisible(!isVisible);
  }

  function animationDaration(newTime) {
    setDuration(newTime);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <button onClick={showText} className={styles.btn}>
          {isVisible ? "Hidden Text" : "Show Text"}
        </button>
        <input
          type="number"
          min="0.1"
          max="0.9"
          step="0.1"
          onChange={(e) => animationDaration(e.target.value)}
          value={duration}
        />
      </div>
      <p ref={textRef} className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sunt
        labore et quisquam laboriosam eligendi, hic in fugiat. Ad quia ab
        tenetur eius inventore aliquam tempore laboriosam culpa ut ipsum?
        Recusandae aut excepturi consectetur? Quaerat hic, officia nobis
        molestiae explicabo, harum ea quod iusto deleniti, voluptas provident
        sapiente ex soluta! Suscipit odio, nesciunt quibusdam maxime recusandae
        ducimus quis provident dolor. Laboriosam et natus at pariatur saepe
        fugiat dignissimos impedit obcaecati, facilis vel rem similique placeat
        porro voluptatem voluptas minus consectetur excepturi beatae voluptates
        velit, qui accusantium ad eum fugit. Nisi.
      </p>
    </div>
  );
}
export default ToggleText;
