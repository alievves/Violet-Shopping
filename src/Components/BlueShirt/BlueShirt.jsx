import React, { useState } from 'react'
import styles from "./BlueShirt.module.css"
import StarIcon from '@mui/icons-material/Star';


export default function BlueShirt() {

    const [count, setCount] = useState(0)
    
    const minezeCount = () => {
        setCount(count - 1)
    }
    
    const plusCount = () => {
        setCount(count + 1)
    }
    return (
        <figure className={styles.container}>

            <div className={styles.leftSide}>
                <img src="./IMG/Products/product-1.jpg" alt="" />
            </div>

            <div className={styles.rightSide}>
                <h2 className={styles.h2}>Dotted Blue Shirt</h2>

                <div className={styles.part1}>
                    <p className={styles.price}>$22.90</p>
                    <i className={styles.stars}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></i>
                </div>

                <div className={styles.part2}>
                    <p className={styles.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br />
                        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan <br />
                        lacus vel facilisis.
                    </p>
                </div>

                <div className={styles.part3}>
                    <p className={styles.category}>Caregory :<span className={styles.sp}> Men’s Wear</span></p>
                    <p className={styles.tags}>Tags :<span className={styles.sp}> man, shirt, dotted, elegant, cool</span></p>
                </div>

                <div className={styles.part4}>
                    <div className={styles.count}>
                        <button className={styles.btn} onClick={minezeCount}>-</button>
                        <div>{count}</div>
                        <button className={styles.btn} onClick={plusCount}>+</button>
                    </div>
                    <div className={styles.addBox}>
                        <p className={styles.add}>ADD TO CART</p>
                    </div>
                </div>
            </div>

        </figure>
    )
}
