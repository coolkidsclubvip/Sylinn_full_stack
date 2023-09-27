import React from 'react'
import * as styles from "./Home.css";
import HomepageCarousel from '../components/common/HomepageCarousel';
import ProductsGrid from '../components/common/ProductsGrid';

function Home() {
  return (
    <div className={styles.homeContainer}>
      
    <HomepageCarousel/>

    <ProductsGrid/>


    </div>
  )
}

export default Home