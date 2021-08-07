import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

let menu = [
  { to: "/mobileapps", title: "Мобильные приложения" },
  { to: "/help", title: "Помощь" },
  { to: "/features", title: "Платные услуги" },
];

const Footer = () => {
    return (
      <footer className="bg-secondary text-light">
        <h1 className="emb text-dark text-center py-4">O|X</h1>
        <p className=" text-center ">
          Cервис объявлений № 1 в Узбекистане <br></br> Частные объявления
          Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
          <br></br> Нажав на кнопку "Подать объявление", вы сможете разместить
          онлайн-объявление на любую необходимую тематику - <br></br>поиск
          работы, услуги, продажа автомобилей, недвижимости, электроники и
          многое другое.<br></br> С помощью сервиса OLX в Узбекистане вы можете
          найти, продать или купить практически все, что угодно.<br></br>
          Воспользовавшись функцией поиска, вы без труда найдете уже
          опубликованные объявления интересующей вас тематики.<br></br> OLX в
          Узбекистане - ваш надежный и незаменимый помощник.
        </p>
        <div className="container py-5 ">
          <div className="embl"></div>
          <p className="pb-5">
            Разделы на сервисе OLX: Детский мир, Недвижимость, Транспорт,
            Работа, Животные, Дом и сад, Электроника, Бизнес и услуги, Мода и
            стиль, Хобби, отдых и спорт, Отдам даром, Обмен
          </p>
          <hr></hr>
          <div class="row d-flex">
            <div className="col-md-4">
              <div>
                {menu.map((value) => (
                  <Link to={value.to} key={value.to}>
                    {value.title}
                  </Link>
                ))}
                <div className="playmarketbtn d-flex mt-3">
                  <img
                    className="playmarketbtn"
                    src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg"
                    alt=""
                  />
                  <img
                    src="	https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg"
                    alt=""
                  />
                </div>

                
                <p className="d-flex">
                  Бесплатное приложение для твоего телефона
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div></div>
            </div>
            <div className="col-md-4">
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
