import React from 'react'
import styles from "./Dresses.module.css"

export default function Dresses() {
    return (
        <section className={styles.container}>

            <div className={styles.childLeft}>
                <h2>Dresses</h2>
                <div className={styles.notes}>
                    <p className={styles.p1}>Home / </p>
                    <p className={styles.p2}>Dresses / </p>
                    <p className={styles.p3}>Night Dresses</p>
                </div>
            </div>

            <div className={styles.childRight}>
                <img src="./IMG/add.jpg" alt="" />
            </div>

        </section>
    )
}
