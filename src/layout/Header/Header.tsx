import Link from "next/link";
import {Ubuntu} from "@next/font/google";

import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';

import styles from './Header.module.scss'

const ubuntu = Ubuntu({weight: '400', subsets: ['latin']})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <h2 className={styles.siteNavTitle}>Miyabi House</h2>
          <ul className={`${styles.siteNavList} ${ubuntu.className}`}>
            <li className={styles.siteNavListItem}>
              <Link href='#' className={styles.siteNavListItemLink}>Home</Link>
            </li>
            <li className={styles.siteNavListItem}>
              <Link href='#' className={styles.siteNavListItemLink}>Menu</Link>
            </li>
            <li className={styles.siteNavListItem}>
              <Link href='#' className={styles.siteNavListItemLink}>About</Link>
            </li>
            <li className={styles.siteNavListItem}>
              <Link href='#' className={styles.siteNavListItemLink}>Sessions</Link>
            </li>
          </ul>
          <ul className={styles.userNavList}>
            <li className={styles.userNavListItem}>
              <button className={styles.userNavListItemBtn}>
                <AiOutlineShoppingCart className={styles.userNavListItemBtnIcon}/>
              </button>
            </li>
            <li className={styles.userNavListItem}>
              <button className={styles.userNavListItemBtn}>
                <AiOutlineUser className={styles.userNavListItemBtnIcon}/>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;