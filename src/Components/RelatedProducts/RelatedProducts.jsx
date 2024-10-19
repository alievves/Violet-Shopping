import { React, useState } from 'react'
import styles from "./RelatedProducts.module.css"
import product from '../../Datas'

export default function RelatedProducts() {

    const filteredProducts = product.slice(0, 4)
    const [related, setRelated] = useState(filteredProducts)

    return (
        <section className={styles.container}>
            <h1 className={styles.h1}>Related Products</h1>
            <figure className={styles.products}>
                {related.map((e, index) => {
                    return (
                        <div key={index}>
                            <img className={styles.images} src={e.url} alt="" />
                            <p className={styles.name}>{e.name}</p>
                            <p className={styles.price}>{e.price}</p>
                        </div>
                    )
                })}
            </figure>
        </section>
    )
}
