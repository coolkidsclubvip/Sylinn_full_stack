import React from 'react'
import * as styles from "./Home.css";
import HomepageCarousel from '../components/common/HomepageCarousel';
import ProductsGrid from '../components/common/ProductsGrid';
import NewArrival from '../components/common/NewArrival';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <HomepageCarousel />
      <ProductsGrid />
      <NewArrival/>
    </div>
  );
}

export default Home