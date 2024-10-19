import React from 'react'
import styles from "./Contact.module.css"
import Header from '../../Components/Header/Header'
import Dresses from '../../Components/Dresses/Dresses'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Map from '../../Components/Map/Map'
import Footer from '../../Components/Footer/Footer'

export default function Contact() {
  return (
    <div>
      <Header />
      <Dresses />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  )
}
