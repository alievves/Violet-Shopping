import React from 'react'
import styles from "./Checkout.module.css"
import Header from '../../Components/Header/Header'
import Dresses from '../../Components/Dresses/Dresses'
import Information from '../../Components/Information/Information'
import Footer from '../../Components/Footer/Footer'

export default function Checkout() {
  return (
    <div>
      <Header />
      <Dresses />
      <Information />
      <Footer />
    </div>
  )
}
