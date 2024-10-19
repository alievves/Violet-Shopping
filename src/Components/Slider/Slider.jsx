import React, { useState } from 'react'
import styles from "./Slider.module.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  const goToPrevious = () => {
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
    setCurrentIndex(newIndex)
  };

  const goToNext = () => {
    let isLastSlide = currentIndex === slides.length - 1;
    let newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  return(
    <div className={styles.slider}>
      <div className={styles.leftArrow} onClick={goToPrevious}><ArrowBackIosIcon /></div>
      <div className={styles.rightArrow} onClick={goToNext}><ArrowForwardIosIcon /></div>
      <div style={slideStyles} className={styles.imgFader}></div>
      <h1 className={styles.year}>2024</h1>
      <div className={styles.text}>Look book</div>
    </div>
  )
}
export default Slider;