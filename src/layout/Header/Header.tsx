import {useState, useEffect} from "react";
import Link from "next/link";
import {Ubuntu} from "@next/font/google";

import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai';

import MobileMenu from "@/layout/Header/MobileMenu/MobileMenu";

import styles from './Header.module.scss'

const ubuntu = Ubuntu({weight: '400', subsets: ['latin']})

const Header = () => {

  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

  useEffect(() => {
    if (openedMobileMenu) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openedMobileMenu])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <h2 className={styles.siteNavTitle}>Miyabi House</h2>
            <ul className={`${styles.siteNavList} ${ubuntu.className}`}>
              <li className={styles.siteNavListItem}>
                <Link href='/' className={styles.siteNavListItemLink}>Home</Link>
              </li>
              <li className={styles.siteNavListItem}>
                <Link href='/' className={styles.siteNavListItemLink}>Menu</Link>
              </li>
              <li className={styles.siteNavListItem}>
                <Link href='/' className={styles.siteNavListItemLink}>About</Link>
              </li>
              <li className={styles.siteNavListItem}>
                <Link href='/' className={styles.siteNavListItemLink}>Sessions</Link>
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
            <button className={styles.mobileMenu} onClick={() => setOpenedMobileMenu(true)}>
              <AiOutlineMenu className={styles.mobileMenuIcon}/>
            </button>
          </nav>
        </div>
      </header>
      {openedMobileMenu && <MobileMenu closeMobileMenu={() => setOpenedMobileMenu(false)}/>}
    </>
  )
}

export default Header;