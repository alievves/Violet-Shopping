import React from 'react'
import styles from "./Cards.module.css"
import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <div className={styles.container}>

            <div className={styles.row}>

                <div>
                    <div className={styles.boxLeft1}>
                        <img src="./IMG/Cards/f-box-1.jpg" alt="" />
                        <div className={styles.textBox1}>
                            <span className={styles.span}>2024 Party</span>
                            <h2 className={styles.jewelry}>Jewelry</h2>
                            <div className={styles.trendAllert}>TREND ALLERT</div>
                        </div>
                        <Link className={styles.seeMore} to="/">SEE MORE</Link>
                    </div>

                    <div className={styles.boxLeft2}>
                        <img src="./IMG/Cards/f-box-2.jpg" alt="" />
                        <div className={styles.textBox2}>
                            <span className={styles.year}>2024 Trend</span>
                            <h2 className={styles.jewelry}>Foot wear</h2>
                            <div className={styles.trend}>BOLD & Black</div>
                        </div>
                    </div>

                </div>

                <div className={styles.boxRight}>
                    <img src="./IMG/Cards/f-box-3.jpg" alt="" />
                    <div className={styles.textBox3}>
                        <span className={styles.span}>2024 Party</span>
                        <h2 className={styles.h2}>Collection</h2>
                        <div className={styles.trendAllert}>TREND ALLERT</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
