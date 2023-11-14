import { useState } from "react";
import * as styles from "../../styles/layout/Layout.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BacktoTopBtn from "./BacktoTopBtn"
import Header from "./Header";
import Footer from "./Footer";
import OffCanvas_Nav from "./OffCanvas_Nav";
// import OffCanvas_Wish from "./OffCanvas_Wish";

const Layout = () => {
  const [showOffcanvas_Nav, setShowOffcanvas_Nav] = useState(false);
  const [showOffcanvas_Wish, setShowOffcanvas_Wish] = useState(false);

  return (
    <div className={styles.app}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <OffCanvas_Nav
        showOffcanvas={showOffcanvas_Nav}
        setShowOffcanvas={setShowOffcanvas_Nav}
      />
      <Header
        showOffcanvas_Nav={showOffcanvas_Nav}
        setShowOffcanvas_Nav={setShowOffcanvas_Nav}
        showOffcanvas_Wish={showOffcanvas_Wish}
        setShowOffcanvas_Wish={setShowOffcanvas_Wish}
      />
      {/* <OffCanvas_Wish
        showOffcanvas={showOffcanvas_Wish}
        setShowOffcanvas={setShowOffcanvas_Wish}
      /> */}
      <div
        className={styles.appContent}
        // Click anywhere in the content body to close either offcanvas
        onClick={() => {
          setShowOffcanvas_Nav(false);
          setShowOffcanvas_Wish(false);
        }}
      >
        <Outlet />
      </div>
      <BacktoTopBtn/>
      <Footer />
    </div>
  );
};

export default Layout;
