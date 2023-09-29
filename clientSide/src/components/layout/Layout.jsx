import * as styles from "./Layout.css";
import { Outlet } from "react-router-dom";
import { ToastContainer,Bounce } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";



const Layout = () => {
  return (
    <div className={styles.app}>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
