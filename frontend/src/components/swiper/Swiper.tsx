import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styleSwiper.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BookDetails } from '@/types/types';

interface SwiperGalleryProps {
  book: BookDetails;
}

const SwiperGalery = ({ book }: SwiperGalleryProps) => {
  const { imgSrc, title } = book;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-main"
      >
        {imgSrc.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Image ${title}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-small"
      >
        {imgSrc.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Image ${title}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperGalery;
