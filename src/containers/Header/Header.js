import "./Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./../../theme-context";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

let menu = [
  { to: "/", title: "Home" },
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/dashboard", title: "Dashboard" },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);

  return (
    <header className={` ${theme}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img
            className=" logo "
            src="https://o.remove.bg/downloads/3867a60c-3ac8-4bf4-8939-b6601a4adf06/fb-image_redesign-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="d-flex align-items-center ">
          <div className="me-0 ">
            {" "}
            <span className="fw-bold">
              <a href="">O'Z</a>
            </span>
            <span className={` mb-2 ${theme}`}>
              <a href=""> | РУ</a>
            </span>
          </div>
          <div className="po ms-4">
            {" "}
            <a href="">
              <FontAwesomeIcon className="me-4" icon={faHeart} />
            </a>
            <a className="fw-bold" href="#">
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
