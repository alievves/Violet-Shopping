import React from 'react'
import styles from './Categories.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Dresses from '../../Components/Dresses/Dresses'
import AllDresses from '../../Components/AllDresses/AllDresses'

export default function Categories() {
  return (
    <div>
      <Header />
      <Dresses />
      <AllDresses />
      <Footer />
    </div>
  )
}
