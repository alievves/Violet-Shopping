import React from 'react'
import styles from "./Home.module.css"
import Header from "../../Components/Header/Header"
import Slider from '../../Components/Slider/Slider'
import Featuring from '../../Components/Featuring/Featuring'
import Cards from '../../Components/Cards/Cards'
import Products from '../../Components/Products/Products'
import LookBook from '../../Components/LookBook/LookBook'
import Contract from '../../Components/Contract/Contract'
import Footer from '../../Components/Footer/Footer'

export default function Home() {

  const slides = [
    { id: 1, url: "./IMG/Slider/slider-1.jpg" },
    { id: 2, url: "./IMG/Slider/slider-2.jpg" },
    { id: 3, url: "./IMG/Slider/slider-3.jpg" },
  ]

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Slider slides={slides} />
      </div>
      <Featuring />
      <Cards />
      <Products />
      <LookBook />
      <Contract />
      <Footer />
    </div>
  )
}
