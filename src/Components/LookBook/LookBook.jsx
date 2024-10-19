import React from 'react'
import styles from "./LookBook.module.css"
import { Link } from 'react-router-dom'

export default function LookBook() {
    return (
        <div className={styles.lookBook}>

            <div className={styles.leftSide}>
                <h2 className={styles.h2}>2024 <br /> #lookbook</h2>
                <p className={styles.text}>
                    Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum <br />
                    malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum <br />
                    quam, ut commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed <br />
                    sollicitudin nulla non leo viverra scelerisque. Phasellus facilisis lobortis metus, sit <br />
                    amet viverra lectus finibus ac. Aenean non felis dapibus, placerat libero auctor, <br />
                    ornare ante. Morbi quis ex eleifend, sodales nulla vitae, scelerisque ante. Nunc id <br />
                    vulputate dui. Suspendisse consectetur rutrum metus nec scelerisque. s
                </p>
                <div className={styles.link}>
                    <Link to='./' className={styles.seeMore}>SEE MORE</Link>
                </div>
            </div>

            <div className={styles.rightSide}>
                <img src="./IMG/LookBook/lookbok.jpg" alt="" />
                <div className={styles.fashion}>fashion</div>
            </div>

        </div>
    )
}
