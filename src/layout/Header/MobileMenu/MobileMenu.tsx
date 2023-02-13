import Link from "next/link";
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai';

import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  closeMobileMenu(): void
}

const MobileMenu = ({closeMobileMenu}: MobileMenuProps) => {
  return (
    <div className={styles.mobileMenu}>
      <ul className={styles.mobileMenuSiteList}>
        <li className={styles.mobileMenuSiteListItem}>
          <Link href='/' className={styles.mobileMenuSiteListItemLink}>
            Home
          </Link>
        </li>
        <li className={styles.mobileMenuSiteListItem}>
          <Link href='/' className={styles.mobileMenuSiteListItemLink}>
            Menu
          </Link>
        </li>
        <li className={styles.mobileMenuSiteListItem}>
          <Link href='/' className={styles.mobileMenuSiteListItemLink}>
            About
          </Link>
        </li>
        <li className={styles.mobileMenuSiteListItem}>
          <Link href='/' className={styles.mobileMenuSiteListItemLink}>
            Sessions
          </Link>
        </li>
      </ul>
      <ul className={styles.mobileMenuUserList}>
        <li className={styles.mobileMenuUserListItem}>
          <button className={styles.mobileMenuUserListItemBtn}>
            <AiOutlineShoppingCart className={styles.mobileMenuUserListItemBtnIcon}/>
          </button>
        </li>
        <li className={styles.mobileMenuUserListItem}>
          <button className={styles.mobileMenuUserListItemBtn}>
            <AiOutlineUser className={styles.mobileMenuUserListItemBtnIcon}/>
          </button>
        </li>
      </ul>
      <AiOutlineClose className={styles.mobileMenuCloseIcon} onClick={closeMobileMenu}/>
    </div>
  )
}

export default MobileMenu;