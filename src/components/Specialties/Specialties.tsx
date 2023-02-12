import Image from "next/image";
import Link from "next/link";

import {ISpecialtiesItem} from "../../../models";

import styles from './Specialties.module.scss'

interface SpecialtiesProps {
  specialties: ISpecialtiesItem[],
}

const Specialties = ({specialties}: SpecialtiesProps) => {
  return (
    <section className={styles.specialties}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>Our specialties</h2>
          <div className={styles.contentList}>
            {specialties.map(item => (
              <div key={item.id} className={styles.contentListItem}>
                <div className={styles.contentListItemImageWrapper}>
                  <Image src={item.image} alt={item.title} className={styles.contentListItemImage}/>
                </div>
                <div className={styles.contentListItemInfo}>
                  <h3 className={styles.contentListItemInfoTitle}>{item.title}</h3>
                  <span className={styles.contentListItemInfoText}>{item.varieties} varieties</span>
                </div>
                <Link href="/" className={styles.contentListItemLink}>Order now</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialties;