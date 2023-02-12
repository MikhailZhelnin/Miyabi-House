import Image from "next/image";
import Link from "next/link";
import {Ubuntu} from "@next/font/google";

import {images} from "../../../public/assets/images/images";

import styles from './Banner.module.scss'

const ubuntu = Ubuntu({weight: '400', subsets: ['latin']})

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Taste the tradition of Japan</h1>
          <div className={styles.contentText}>
            <p className={ubuntu.className}>
              Lorem ipsum dolor sit amet consectetur. Turpis diam id nulla libero at faucibus libero eget. Ornare
              tincidunt tempor sed egestas pulvinar facilisis.
            </p>
          </div>
          <Link href='/' className={styles.contentLink}>order now</Link>
          <div className={styles.contentMainImageWrapper}>
            <Image
              src={images.banner.main}
              alt="Banner"
              className={styles.contentMainImage}
            />
          </div>
          <div className={styles.contentFooterImageWrapper}>
            <Image
              src={images.banner.footer}
              alt="Footer"
              className={styles.contentFooterImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;