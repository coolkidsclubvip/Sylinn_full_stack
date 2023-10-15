import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "../../styles/components/Header.css";
import * as fonts from "../../styles/fonts/fonts.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Logo_sylinn_png from "../../assets/images/Logo-sylinn-png.png";
import Logo_sylinn_small from "../../assets/images/Logo-sylinn-small.png";
import useAuth from "../../hooks/useAuth";
import { Turn as Hamburger } from "hamburger-react";
import { TbHeart, TbLogout, TbUserSquare, TbLogin2 } from "react-icons/tb";
import { LuUserPlus } from "react-icons/lu";

function Header({ showOffcanvas, setShowOffcanvas }) {
  const [isHovered, setIsHovered] = useState(false);

  // Hamburger button transformation
  function myFunction(x) {
    x.classList.toggle("change");
  }

  // useAuth, our own custom hook to to call useContext remotely.
  const { user, logout } = useAuth();

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

  return (
    <Container fluid>
      <div
        className={` ${scrollTop > 150 ? styles.smallHeader : styles.header}`}
      >
        <Row className="d-flex align-items-center justify-content-between py-2 ms-5 mb-0">
          <Col sm={2} md={4} className="d-flex justify-content-center ">
            <Hamburger
              toggled={showOffcanvas}
              toggle={setShowOffcanvas}
              size={45}
              direction="right"
            />
          </Col>
          <Col sm={6} md={4} className="d-flex justify-content-center">
            <Navbar.Brand>
              <Link to={"/"}>
                <img
                  src={`${
                    scrollTop > 150 ? Logo_sylinn_small : Logo_sylinn_png
                  }`}
                  style={{ transition: "all 1s ease-in-out" }}
                  alt="Logo"
                />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col sm={4} md={4} className="d-flex justify-content-center">
            {!user && (
              <Link to={"/login"}>
                <TbLogin2 size={30} /> &nbsp;&nbsp;&nbsp;
              </Link>
            )}
            {!user && (
              <Link to={"/register"}>
                <LuUserPlus size={30} />
                &nbsp;&nbsp;&nbsp;
              </Link>
            )}
            {user && (
              <Link to={"/dashboard"}>
                <TbUserSquare size={30} />
                &nbsp;&nbsp;&nbsp;
              </Link>
            )}
            {/* wishlist */}
            <Link to={`user?{ "/wishlist":"/login"}`}>
              &nbsp;
              <TbHeart size={30} />
              &nbsp;&nbsp;&nbsp;
            </Link>
            {/* logout button */}
            {user && (
              <Link>
                <TbLogout
                  size={30}
                  onClick={() => {
                    logout();
                  }}
                />
              </Link>
            )}
            &nbsp;
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
