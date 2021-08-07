import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

let menu = [
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/help", title: "Помощь" },
  { to: "/features", title: "Платные услуги" },
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/help", title: "Помощь" },
  { to: "/features", title: "Платные услуги" },

  //   {
  //       img: "https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg",
  //        icon: "https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg",
  //   },
];
let list = [
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/help", title: "Помощь" },
  { to: "/features", title: "Платные услуги" },
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/help", title: "Помощь" },
  { to: "/features", title: "Платные услуги" },

  //   {
  //       img: "https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg",
  //        icon: "https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg",
  //   },
];

const Footer = () => {
  return (
    <footer className=" text-dark">
      <hr className="mb-3" />
      <div className="container py-5">
        <div class="row">
          <div className="col-md-3">
            <div>
              {menu.map((value) => (
                <Link to={value.to} key={value.to}>
                  {value.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div>
              {list.map((value) => (
                <Link to={value.to} key={value.to}>
                  {value.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex ">
              <a href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                <img
                  className="m-2"
                  src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg"
                  alt=""
                />
              </a>

              <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                <img
                  src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
