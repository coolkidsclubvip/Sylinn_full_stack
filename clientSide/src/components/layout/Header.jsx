import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "../../styles/layout/Header.css";
import * as fonts from "../../styles/fonts/fonts.css";
import {
  Container,
  Row,
  Col,
  Navbar,

} from "react-bootstrap";
import Logo_sylinn_big from "../../assets/images/Logo-sylinn-big.png";
import Logo_sylinn_small from "../../assets/images/Logo-sylinn-small.png";
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
      <Container fluid className={styles.container}>
        <div
          className={` ${
            scrollTop < 200 && isHomePage
              ? styles.bigHeader
              : styles.smallHeader
          }`}
        >
          <Row className="d-flex align-items-center justify-content-between py-2 ms-5 mb-0">
            <Col
              xs={4}
              sm={4}
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
            <Col xs={4} sm={4} md={4} className="d-flex justify-content-center">
              <Navbar.Brand>
                <Link to={"/"}>
                  <img
                    src={`${
                      scrollTop < 200 && isHomePage
                        ? Logo_sylinn_big
                        : Logo_sylinn_small
                    }`}
                    style={{ width: "100%" }}
                    alt="Logo"
                  />
                </Link>
              </Navbar.Brand>
            </Col>
            <Col xs={4} sm={4} md={4} className="d-flex justify-content-center">
              {!user && (
                <Link to={"/login"}>
                  <TbLogin2 size={30} className="me-4" />
                </Link>
              )}
              {!user && (
                <Link to={"/register"}>
                  <LuUserPlus size={30} className="me-4" />
                </Link>
              )}
              {user && (
                <Link to={"/dashboard"}>
                  <TbUserSquare size={30} className="me-4" />
                </Link>
              )}
              {/* wishlist */}
              <Link
                // to={user ? "" : "/login"}
                onClick={() => {
                  setShowOffcanvas_Wish(!showOffcanvas_Wish);
                }}
              ></Link>
              {/* logout button */}
              {user && (
                <Link>
                  <TbLogout size={30} onClick={handleClick} className="me-4" />
                </Link>
              )}
              <Link>
                {" "}
                <TbSearch
                  size={30}
                  className="me-4"
                  onClick={() => {
                    setShowSearch(!showSearch);
                  }}
                />
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
