import React from 'react'
import styles from "./Information.module.css"

export default function Information() {
    return (
        <div className={styles.container}>
            <h3 className={styles.h3}>Your Information</h3>
            <form className={styles.form}>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>Name :</p>
                    <input className={styles.input} type="text" placeholder='First Name' />
                    <input className={styles.input} type="text" placeholder='Last Name' />
                </div>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>Street Address :</p>
                    <input className={styles.inputs} type="text" />
                </div>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>Country :</p>
                    <input className={styles.inputs} type="text" />
                </div>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>City :</p>
                    <input className={styles.inputs} type="text" />
                </div>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>Post Code/ZIP :</p>
                    <input className={styles.inputs} type="text" />
                </div>
                <div className={styles.txtForm}>
                    <p className={styles.txt}>Phone :</p>
                    <input className={styles.inputs} type="text" />
                </div>
                <h3 className={styles.h3}>Payment</h3>

                <div className={styles.credit}>
                    <div className={styles.paypal}>
                        <p className={styles.payment}>Paypal</p>
                        <img src="../IMG/paypal.jpg" alt="" />
                    </div>
                    <div className={styles.masterCard}>
                        <p className={styles.payment}>Credit / Debit card</p>
                        <img src="../IMG/mastercard.jpg" alt="" />
                    </div>
                </div>

                <button className={styles.btn} type='submit'>place your order</button>
            </form>
        </div>
    )
}
