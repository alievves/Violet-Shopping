import React from 'react'
import styles from "./Featuring.module.css"

export default function Featuring() {
    return (
        <div className={styles.Featuring}>
            <div className={styles.row}>
                <div className={styles.first}>
                    <img src="./IMG/icons/f-delivery.png" className={styles.Ficons} alt="" />
                    <h4 className={styles.h4}>Free shipping</h4>
                    <p className={styles.p}>Fusce urna quam, euismod sit amet mollis quis,<br />
                        vestibulum quis velit. Vesti bulum mal esuada<br />
                        aliquet libero viverra cursus.
                    </p>
                </div>

                <div className={styles.secound}>
                    <img src="./IMG/icons/coin.png" className={styles.Ficons} alt="" />
                    <h4 className={styles.h4}>100% Money back</h4>
                    <p className={styles.p}>Fusce urna quam, euismod sit amet mollis quis,<br />
                        vestibulum quis velit. Vesti bulum mal esuada<br />
                        aliquet libero viverra cursus.
                    </p>
                </div>

                <div className={styles.third}>
                    <img src="./IMG/icons/chat.png" className={styles.Ficons} alt="" />
                    <h4 className={styles.h4}>Online support 24/7</h4>
                    <p className={styles.p}>Fusce urna quam, euismod sit amet mollis quis,<br />
                        vestibulum quis velit. Vesti bulum mal esuada<br />
                        aliquet libero viverra cursus.
                    </p>
                </div>
            </div>
        </div>
    )
}
