import React from 'react'
import styles from "./ProductPage.module.css"
import Header from '../../Components/Header/Header'
import Dresses from '../../Components/Dresses/Dresses'
import BlueShirt from '../../Components/BlueShirt/BlueShirt'
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts'
import Footer from '../../Components/Footer/Footer'


export default function ProductPage() {
  return (
    <div>
      <Header />
      <Dresses />
      <BlueShirt />
      <RelatedProducts />
      <Footer />
    </div>
  )
}
