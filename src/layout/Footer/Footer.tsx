import Link from "next/link";
import {Ubuntu} from "@next/font/google";
import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

import styles from './Footer.module.scss'

const ubuntu = Ubuntu({weight: '400', subsets: ['latin']})

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav className={styles.content}>
          <h3 className={styles.contentTitle}>Miyabi House</h3>
          <div className={`${styles.contentNavSite} ${ubuntu.className}`}>
            <ul className={styles.contentNavSiteList}>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Sushi</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Ramen</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Mochi</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Onigiri</Link>
              </li>
            </ul>
            <ul className={styles.contentNavSiteList}>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Home</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>About</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Company</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Team</Link>
              </li>
              <li className={styles.contentNavSiteListItem}>
                <Link href='/' className={styles.contentNavSiteListItemLink}>Story</Link>
              </li>
            </ul>
          </div>
          <ul className={styles.contentNavSocial}>
            <li className={styles.contentNavSocialItem}>
              <Link href='/' className={styles.contentNavSocialItemLink}>
                <FaTwitter className={styles.contentNavSocialItemLinkIcon}/>
              </Link>
            </li>
            <li className={styles.contentNavSocialItem}>
              <Link href='/' className={styles.contentNavSocialItemLink}>
                <FaFacebookF className={styles.contentNavSocialItemLinkIcon}/>
              </Link>
            </li>
            <li className={styles.contentNavSocialItem}>
              <Link href='/' className={styles.contentNavSocialItemLink}>
                <AiFillInstagram className={styles.contentNavSocialItemLinkIcon}/>
              </Link>
            </li>
            <li className={styles.contentNavSocialItem}>
              <Link href='/' className={styles.contentNavSocialItemLink}>
                <FaLinkedinIn className={styles.contentNavSocialItemLinkIcon}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;