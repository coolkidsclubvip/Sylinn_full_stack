import { useState } from "react";
import * as styles from "./Layout.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";
import OffCanvas from "./OffCanvas";

const Layout = () => {

  const [showOffcanvas,setShowOffcanvas]= useState(false);
  
  return (
    <div className={styles.app}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <OffCanvas
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
      />
      <Header
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
      />

      <div className={styles.appContent} onClick={()=>{setShowOffcanvas(false)}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
