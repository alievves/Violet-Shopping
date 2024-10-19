import React, { useState } from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <>
      <div className={styles.header}>

        <div className={styles.child1}>
          <Link to="/"><img src="./IMG/Logo/logo.png" alt="" /></Link>
        </div>

        <ul className={styles.child2}>
          <li className={styles.home}><Link to="/">Home</Link></li>
          <li className={styles.shop}><Link to="/categories">Shop</Link>
          </li>
          <li className={styles.about}><Link to="/product-page">About</Link></li>
          <li className={styles.blog}><Link to="/checkout">Blog</Link></li>
          <li className={styles.contact}><Link to="/contact">Contact</Link></li>
        </ul>

        <div className={styles.child3}>
          <div className={styles.register}>
            <Link to="/register-page">Register / </Link>
            <Link to="/signIn-page">Sign in</Link>
          </div>
          <form>
            <input type="text" placeholder='search here ...' className={styles.input}/>
            <i><img src="./IMG/Icons/search.png" alt="" className={styles.iconsHeader}/></i>
          </form>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className={styles.childBottom1}><img src="./IMG/Icons/delivery.png" alt="" className={styles.iconsBottom} />Free shipping on orders over $30 in USA</div>
        <div className={styles.childBottom2}><img src="./IMG/Icons/voucher.png" alt="" className={styles.iconsBottom} />20% Student Discount</div>
        <div className={styles.childBottom3}><img src="./IMG/Icons/sales.png" alt="" className={styles.iconsBottom} />30% off on dresses. Use code: 30OFF</div>
      </div>
    </>
  )
}