import React, { useRef } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Импортируем наши стили
import * as styles from "./styles.module.css";

// Импортируем необходимые стили из свайпера.
import "swiper/css";
import "swiper/css/navigation";

import mockImage from "./mockImage.png";
import { IconArrowPrev } from "./IconArrowPrev";

const images = [mockImage, mockImage, mockImage];

export const AutoSlider = () => {
  const ref = useRef<SwiperRef>(null);

  const handleArrowClick = (direction: "prev" | "next") => () => {
    const root = ref.current?.swiper;
    if (!root) return;
    if (direction === "prev") {
      root.slidePrev();
    } else {
      root.slideNext();
    }
  };

  const handlePaginationClick = (index: number) => {
    const root = ref.current?.swiper;
    if (!root) return;
    root.slideTo(index);
  };

  return (
    <div>
      <Swiper ref={ref} className={styles.root} loop={true}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className={styles.image} />
          </SwiperSlide>
        ))}

        <div className={styles.buttonPrev} onClick={handleArrowClick("prev")}>
          <IconArrowPrev />
        </div>
        <div className={styles.buttonNext} onClick={handleArrowClick("next")}>
          <IconArrowPrev />
        </div>
      </Swiper>

      {/* Кастомная пагинация */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {images.map((_, index) => (
          <button key={index} onClick={() => handlePaginationClick(index)}>
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};
