import React from 'react'
import styles from "./Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className={styles.footer}>

            <div className={styles.top}>

                <form action="#" className={styles.form}>
                    <input type="text" placeholder='Your email address' className={styles.input} />
                    <button type='submit' className={styles.btn}>SUBSCRIBE TO OUR NEWSLETTER</button>
                </form>


                <div className={styles.menu}>

                    <div>
                        <h4 className={styles.menuDisc}>About us</h4>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuDisc}>About Us</li>
                            <li className={styles.subMenuDisc}>Community</li>
                            <li className={styles.subMenuDisc}>Jobs</li>
                            <li className={styles.subMenuDisc}>Shipping</li>
                            <li className={styles.subMenuDisc}>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.menuDisc}>Customer Care</h4>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuDisc}>Search</li>
                            <li className={styles.subMenuDisc}>Privacy Policy</li>
                            <li className={styles.subMenuDisc}>2024 Lookbook</li>
                            <li className={styles.subMenuDisc}>Shipping & Delivery</li>
                            <li className={styles.subMenuDisc}>Gallery</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.menuDisc}>Our Services</h4>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuDisc}>Free Shipping</li>
                            <li className={styles.subMenuDisc}>Free Returnes</li>
                            <li className={styles.subMenuDisc}>Our Franchising</li>
                            <li className={styles.subMenuDisc}>Terms and conditions</li>
                            <li className={styles.subMenuDisc}>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.menuDisc}>Information</h4>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuDisc}>Payment methods</li>
                            <li className={styles.subMenuDisc}>Times and shipping costs</li>
                            <li className={styles.subMenuDisc}>Product Returns</li>
                            <li className={styles.subMenuDisc}>Shipping methods</li>
                            <li className={styles.subMenuDisc}>Conformity of the products</li>
                        </ul>
                    </div>

                </div>

            </div>


            <div className={styles.bottom}>

                <div className={styles.iconsParent}>
                    <Link to="./" className={styles.iconsChild}>
                        <i className={`${styles.icons} ${styles.instagram}`}><InstagramIcon  /></i>
                        <p className={styles.iconsText}>INSTAGRAM</p>
                    </Link>

                    <Link to="./" className={styles.iconsChild}>
                        <i className={`${styles.icons} ${styles.pinterest}`}><PinterestIcon /></i>
                        <p className={styles.iconsText}>PINTEREST</p>
                    </Link>

                    <Link to="./" className={styles.iconsChild}>
                        <i className={`${styles.icons} ${styles.facebook}`}><FacebookIcon /></i>
                        <p className={styles.iconsText}>FACEBOOK</p>
                    </Link>

                    <Link to="./" className={styles.iconsChild}>
                        <i className={`${styles.icons} ${styles.x}`}><XIcon /></i>
                        <p className={styles.iconsText}>X</p>
                    </Link>

                    <Link to="./" className={styles.iconsChild}>
                        <i className={`${styles.icons} ${styles.youtube}`}><YouTubeIcon /></i>
                        <p className={styles.iconsText}>YOUTUBE</p>
                    </Link>
                </div>

                <div>
                    <p className={styles.discText}>
                        Copyright ©2024 All rights reserved | This template is made with by <Link className={styles.alievves}>alievves</Link>
                        </p>
                </div>

            </div>

        </div>
    )
}
