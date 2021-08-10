import "./Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./../../theme-context";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinHearts, faHeart, faKissWinkHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

let menu = [
  { to: "/", title: "Home" },
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/dashboard", title: "Dashboard" },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  return (
    <header className={` ${theme}`} >
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="/">
            <img
              className="logo "
              src="olxogo.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="d-flex align-items-center ">
          {/* <div className="me-0 ">
            {" "}
            <span className="fw-bold">
              <a href="">O'Z</a>
            </span>
            <span className={` mb-2 ${theme}`}>
              <a href=""> | РУ</a>
            </span>
          </div> */}
          <div className="po ms-4">
            {" "}
            <a href="">
              <FontAwesomeIcon className="me-4 heart" icon={faHeart} />
            </a>
            <a className="fw-bold" href="/Мода">
              {" "}
              <FontAwesomeIcon className="me-2" icon={faUser} />
              Подать объявление
            </a>
          </div>

          <div className="ms-5">
            <Button onClick={toggleTheme} color={theme}>
              {theme == "dark" ? "Day" : "Night"}
            </Button>
          </div>
        </div>

        {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
      </div>
    </header>
  );
};

export default Header;
