import {useRef} from 'react';
import Slider from 'react-slick'
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Testimonials.module.scss'

import {ITestimonialsItem} from "../../../models";
import Image from "next/image";

interface TestimonialsProps {
  testimonials: ITestimonialsItem[],
}

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

const Testimonials = ({testimonials}: TestimonialsProps) => {

  const sliderRef = useRef<Slider | null>(null);

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  }

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>Testimonials</h2>
          <Slider {...settings} ref={sliderRef} className={styles.contentList}>
            {testimonials.map(item => (
              <div key={item.id} className={styles.contentListItem}>
                <div className={styles.contentListItemImageWrapper}>
                  <Image src={item.image} alt={`Testimonial ${item.id}`} className={styles.contentListItemImage}/>
                </div>
              </div>
            ))}
          </Slider>
          <button onClick={goToPrevSlide} className={styles.contentControlLeft}>
            <BsChevronDoubleLeft className={styles.contentControlIcon}/>
          </button>
          <button onClick={goToNextSlide} className={styles.contentControlRight}>
            <BsChevronDoubleRight className={styles.contentControlIcon}/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;