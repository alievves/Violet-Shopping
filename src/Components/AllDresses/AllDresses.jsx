import React, { useState } from 'react'
import styles from "./AllDresses.module.css"
import { Link } from 'react-router-dom'

export default function AllDresses() {

    return (
        <section>

            <div className={styles.container}>
                <select className={styles.sBox}>
                    <option value="sort">Sort by</option>
                    <option value="orders">Orders</option>
                    <option value="newest">Newest</option>
                    <option value="price">Price</option>
                </select>

                <div className={styles.rightSide}>
                    <span>20 Products</span>
                    <span>2</span>
                    <span className={styles.span}>4</span>
                    <span>6</span>
                </div>
            </div>

            <figure className={styles.container2}>

                <div className={styles.parent1}>

                    <div className={styles.firstLeft}>
                        <img src="./IMG/Products/img-9.jpg" alt="" />
                        <p className={styles.name}>Green Dress with details</p>
                        <p className={styles.price}>$22.90</p>
                    </div>

                    <div className={styles.firstRight}>
                        <div className={styles.item1}>
                            <img src="./IMG/Products/img-2.jpg" alt="" />
                            <p className={styles.name}>Yellow Maxi Dress</p>
                            <p className={styles.price}>$25.90</p>
                        </div>
                        <div className={styles.item2}>
                            <img src="./IMG/Products/img-3.jpg" alt="" />
                            <p className={styles.name}>One oiece bodysuit</p>
                            <p className={styles.price}>$19.90</p>
                        </div>
                        <div className={styles.item3}>
                            <img src="./IMG/Products/img-6.jpg" alt="" />
                            <p className={styles.name}>Yellow Maxi Dress</p>
                            <p className={styles.price}>$25.90</p>
                        </div>
                        <div className={styles.item4}>
                            <img src="./IMG/Products/img-1.jpg" alt="" />
                            <p className={styles.name}>One oiece bodysuit</p>
                            <p className={styles.price}>$19.90</p>
                        </div>

                    </div>
                </div>

                <div className={styles.parent2}>
                    <div className={styles.item5}>
                        <img src="./IMG/Products/img-5.jpg" alt="" />
                        <p className={styles.name}>Green Dress with details</p>
                        <p className={styles.price}>$22.90</p>
                    </div>
                    <div className={styles.item6}>
                        <img src="./IMG/Products/img-4.jpg" alt="" />
                        <p className={styles.name}>Blue Dress with details</p>
                        <p className={styles.price}>$35.50</p>
                    </div>
                    <div className={styles.item7}>
                        <img src="./IMG/Products/img-8.jpg" alt="" />
                        <p className={styles.name}>Blue Dress with details</p>
                        <p className={styles.price}>$35.50</p>
                    </div>
                    <div className={styles.item8}>
                        <img src="./IMG/Products/img-10.jpg" alt="" />
                        <p className={styles.name}>Blue Dress with details</p>
                        <p className={styles.price}>$35.50</p>
                    </div>
                </div>

                <div className={styles.parent3}>

                    <div className={styles.secLeft}>
                        <div className={styles.item1}>
                            <img src="./IMG/Products/img-11.jpg" alt="" />
                            <p className={styles.name}>Yellow Maxi Dress</p>
                            <p className={styles.price}>$25.90</p>
                        </div>
                        <div className={styles.item2}>
                            <img src="./IMG/Products/img-12.jpg" alt="" />
                            <p className={styles.name}>One oiece bodysuit</p>
                            <p className={styles.price}>$19.90</p>
                        </div>
                        <div className={styles.item3}>
                            <img src="./IMG/Products/img-14.jpg" alt="" />
                            <p className={styles.name}>Yellow Maxi Dress</p>
                            <p className={styles.price}>$25.90</p>
                        </div>
                        <div className={styles.item4}>
                            <img src="./IMG/Products/img-15.jpg" alt="" />
                            <p className={styles.name}>One oiece bodysuit</p>
                            <p className={styles.price}>$19.90</p>
                        </div>

                    </div>

                    <div className={styles.secRight}>
                        <img src="./IMG/Products/img-13.jpg" alt="" />
                        <p className={styles.name}>Green Dress with details</p>
                        <p className={styles.price}>$22.90</p>
                    </div>

                </div>

                <Link to='/'>
                    <button className={styles.btn}>load more</button>
                </Link>
            </figure>

        </section>
    )
}
