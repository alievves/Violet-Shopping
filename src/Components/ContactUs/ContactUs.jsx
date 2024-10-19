import React from 'react'
import styles from "./ContactUs.module.css"

export default function ContactUs() {
  return (
    <form className={styles.form}>
        <input type="text" placeholder='First Name' className={styles.input}/>
        <input type="text" placeholder='Last Name' className={styles.input}/>
        <input type="text" placeholder='E-mail' className={styles.input}/>
        <input type="text" placeholder='Subject' className={styles.input}/>
        <textarea type="text" placeholder='Message' className={styles.inputs}/>
        <button className={styles.btn} type='submit'>send message</button>
    </form>
  )
}
