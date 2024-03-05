import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "../../styles/layout/Header.css";
import * as fonts from "../../styles/fonts/fonts.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo_sylinn_big from "../../assets/images/Logo-sylinn-big.png";
// import Logo_sylinn_small from "../../assets/images/Logo-sylinn-small.png";
import useAuth from "../../hooks/useAuth";
import { Turn as Hamburger } from "hamburger-react";
import { TbSearch, TbLogout, TbUserSquare, TbLogin2 } from "react-icons/tb";
import { LuUserPlus } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import { toast } from "react-toastify";
import SearchBar from "./SearchBar";

function Header({
  showOffcanvas_Nav,
  setShowOffcanvas_Nav,
  showOffcanvas_Wish,
  // setShowOffcanvas_Wish,
}) {
  // Determine if current page is Homepage
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // useAuth, our own custom hook to to call useContext remotely.
  const { user, logout } = useAuth();
  // Hide or show SearchBar
  const [showSearch, setShowSearch] = useState(false);

  //a global scroll parameter and handleScroll function
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // get window scroll position
      setScrollTop(scrollTop);
    };

    // add scroll listener to window object
    window.addEventListener("scroll", handleScroll);

    // dismount listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scrollTop is:", scrollTop);
  const handleClick = () => {
    logout();
    toast.info("Logged out successfully");
  };

  return (
    <>
      <Container fluid>
        <div
          className={` ${
            scrollTop < 200 && isHomePage
              ? styles.bigHeader
              : `${
                  scrollTop > 0
                    ? `${styles.smallHeader} shadow`
                    : styles.smallHeader
                }`
          }`}
        >
          <Row className="d-flex align-items-center justify-content-between py-2">
            <Col
              xs={1}
              sm={1}
              md={4}
              className="d-flex justify-content-center "
            >
              <Hamburger
                toggled={showOffcanvas_Nav}
                toggle={setShowOffcanvas_Nav}
                size={45}
                direction="right"
              />
            </Col>
            <Col
              xs={11}
              sm={11}
              md={4}
              className="d-flex justify-content-center"
            >
              <Link to={"/"}>
                <img
                  src={Logo_sylinn_big}
                  style={
                    scrollTop < 200 && isHomePage
                      ? { width: "100%", transition: "width,0.5s,smooth" }
                      : { width: "70%", transition: "width,0.5s,smooth" }
                  }
                  alt="Logo"
                />
              </Link>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              className={`d-flex justify-content-center ${styles.buttonsGroup}`}
            >
              {!user && (
                <Link to={"/login"}>
                  <TbLogin2 size={30} />
                  <span className="me-4 fs-5">Login</span>
                </Link>
              )}
              {!user && (
                <Link to={"/register"}>
                  <LuUserPlus size={30} />
                  <span className="me-4 fs-5">Register</span>
                </Link>
              )}
              {user && (
                <Link to={"/dashboard"}>
                  <TbUserSquare size={30} />
                  <span className="me-4 fs-5">{user.username}</span>
                </Link>
              )}

              {/* logout button */}

              {user && (
                <Link onClick={handleClick}>
                  <TbLogout size={30} />
                  <span className="me-4 fs-5">Logout</span>
                </Link>
              )}
              <Link
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              >
                {" "}
                <TbSearch size={30} />
                <span className="me-4 fs-5">Search</span>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      {showSearch && (
        <div
          className={`${styles.SearchBarDiv} ${
            scrollTop < 200 && isHomePage ? styles.top100px : styles.top70px
          }`}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar />
            <GrClose
              className={styles.close}
              onClick={() => {
                setShowSearch(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
