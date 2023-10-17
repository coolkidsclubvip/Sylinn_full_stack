
import * as styles from "../styles/Home.css";
// import HomepageCarousel from '../components/common/HomepageCarousel';
import ProductsGrid from '../components/common/ProductsGrid';
import NewArrival from '../components/common/NewArrival';
import Banner1 from '../components/common/Banner1';
import Banner2 from "../components/common/Banner2";

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <HomepageCarousel /> */}
      <ProductsGrid />
      <Banner1 /> 
      <NewArrival/>
      <Banner2/>
    </div>
  );
}

export default Home