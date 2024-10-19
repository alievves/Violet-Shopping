import React, { useState } from 'react'
import styles from "./Products.module.css"
import product from '../../Datas'

export default function Products() {

    const allCategories = ['All', ...new Set(product.map(menu => menu.category))]

    const [products, setProducts] = useState(product)
    const [categories, setCategories] = useState(allCategories)
    const [mainCategory, setMainCategory] = useState("All")
    
    const filterMenus = (category) => {
        if (category === "All") {
            setProducts(product)
            return
        }
        let filteredMenus = product.filter(menu => menu.category === category)
        setProducts(filteredMenus)
        
    }

    return (
        <div>
            <h1 className={styles.h1}>Latest Products</h1>
            <div className={styles.menu}>
                {categories.map((category, index) => (
                    <button key={index} type='button'
                        className={category === mainCategory ? styles.active : styles.btn}
                        onClick={() => {
                            setMainCategory(category)
                            filterMenus(category)
                        }}>
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.products}>
                {products.map((e, index) => {
                    return (
                        <div key={index}>
                            <img src={e.url} alt="" className={styles.img} />
                            <p className={styles.name}>{e.name}</p>
                            <p className={styles.price}>{e.price}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
