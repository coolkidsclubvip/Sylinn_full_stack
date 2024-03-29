import * as styles from "../styles/HomePage.css";
import HomepageCarousel from "../components/common/HomepageCarousel";
import ProductsGrid from "../components/common/ProductsGrid";
import OnSale from "../components/layout/OnSale";
import Banner1 from "../components/common/Banner1";
import Banner2 from "../components/common/Banner2";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>
          Sylinn Australia: Bathtub, sinks, LED mirrors, heated towel racks and
          more
        </title>
      </Helmet>
      <HomepageCarousel />
      <ProductsGrid />
      <Banner1 />
      <OnSale />
      <Banner2 />
    </div>
  );
}

export default HomePage;
