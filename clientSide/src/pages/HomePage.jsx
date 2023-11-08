
import * as styles from "../styles/HomePage.css";
// import HomepageCarousel from '../components/common/HomepageCarousel';
import ProductsGrid from '../components/common/ProductsGrid';
import NewArrival from '../components/common/OnSale';
import Banner1 from '../components/common/Banner1';
import Banner2 from "../components/common/Banner2";
import TestSection from "../components/common/TestSection";

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      {/* <HomepageCarousel /> */}
      <ProductsGrid />
      <Banner1 />
      <NewArrival />
      <Banner2 />
      <TestSection/>
    </div>
  );
}

export default HomePage;