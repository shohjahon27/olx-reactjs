import "./Home.css";
import React, { Component } from "react";
import Container from "../../containers/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    backColor: "rgb(255, 206, 50)",
    title: "Детский мир",
    to: "detskiy-mir",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    backColor: "rgb(35, 229, 219)",
    title: "Транспорт",
    to: "transport",
  },

  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    backColor: "#ff5636",
    title: "Работа",
    to: "Работа",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    backColor: "#3a77ff",
    title: "Недвижимость",
    to: "Недвижимость",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    backColor: "#fff6d9",
    title: "Животные",
    to: "Животные",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    backColor: "#ceddff",
    title: "Домисад",
    to: "Домисад",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    backColor: "#c8f8f6",
    title: "Электроника",
    to: "Электроника",
  },
  {
    icon: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    backColor: "#ffd6c9",
    title: "Бизнес",
    to: "Бизнес",
  },
  {
    icon: "	https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    backColor: "#ffce32",
    title: "Мода",
    to: "Мода",
  },
  {
    icon: "	https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    backColor: "#ceddff ",
    title: "Хобби и спорт",
    to: "Хобби",
  },
  {
    icon: "	https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    backColor: "#c8f8f6",
    title: "Отдам даром",
    to: "Отдам_даром",
  },
  {
    icon: "		https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
    backColor: "#ffd6c9",
    title: "Обмен",
    to: "Обмен",
  },
];

const obj = [
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/ac38wtcimppz-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/rzcteq71bswl2-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/qd1rxgkv9gyu2-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/boz9wwvyabdo-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/wfx5cdefqrcy-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/hbsl1u5rfcxl-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/2t86x9fm5mga-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },

  {
    img: "",
    title: "",
    price: "",
    location: "",
  },
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",

      data: [
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
          title: "kvartira yashashga",
          price: "narxi kelishilgan xolda",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/ac38wtcimppz-UZ/image;s=644x461",
          title: "do'kon sotiladi",
          price: "8000 usd",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/rzcteq71bswl2-UZ/image;s=644x461",
          title: "ofis biznes uchun",
          price: "380 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/qd1rxgkv9gyu2-UZ/image;s=644x461",
          title: "joystek kabelli",
          price: "380 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/boz9wwvyabdo-UZ/image;s=644x461",
          title: "gazeta axborot",
          price: "380 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/wfx5cdefqrcy-UZ/image;s=644x461",
          title: "playstation joystek",
          price: "380 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/hbsl1u5rfcxl-UZ/image;s=644x461",
          title: "Avto GPS tracker Sinotrack ST-901",
          price: "380 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/2t86x9fm5mga-UZ/image;s=644x461",
          title: "Turli hildagi shpoklovkalarimiz bor",
          price: "390 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/92ilsifqx3sz-UZ/image;s=644x461",
          title: "nexia 3 avto kredit sovgasiga megikar pult Uzavtopremium",
          price: "109 000 000 so’m",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/rj5bbmf6icjc-UZ/image;s=644x461",
          title: "Ferre 21 eco madellari Turkey&Uzbekistan Toshkent",
          price: "192 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/qx3b12dfdpmr2-UZ/image;s=644x461",
          title: "Kamaz samasuval allo toshkent buyicha",
          price: "13 000 у.е.",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/p0gqz3wumaks-UZ/image;s=644x461",
          title: "ventilyator",
          price: "2 100 000 so’m",
          location: "Ташкент, Шайхантахурский район 5 авг.",
        },

        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/yttij89p3jr33-UZ/image;s=644x461",
          title: "smm kurslariga marhamat",
          price: "1000 000 sum",
          location: "chinoz  date/bugun",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/lwygbcaibc0r1-UZ/image;s=644x461",
          title: "tekin advokat",
          price: "100 000 sum",
          location: "chinoz  date/kecha",
        },
        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/efkrb4xskwm61-UZ/image;s=644x461",
          title: "Betonlik zinalar  sifatli va arzon ",
          price: "100 000 sum",
          location: "samarqand  date/2 kun oldin",
        },

        {
          img: "https://apollo-olx.cdnvideo.ru/v1/files/3qp7ys1mwqfu2-UZ/image;s=644x461",
          title: "kelin kuylak xolati alo ",
          price: "1 000 000 so’m",
          location: "samarqand  date/3 kun oldin",
        },
        {
          img: "",
          title: "",
          price: "",
          location: "",
        },
      ],
    };
  }
  searchTxt(e) {
    this.setState({ filter: e.target.value });
  }
  render() {
    let { filter, data } = this.state;
    let Dataseach = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(filter.toLowerCase())
      );
    });
    return (
      <Container className="bg-dark">
        <div className="container">
          <input
            type="text"
            placeholder="755 465 объявлений рядом"
            className="input w-100 my-5 p-4"
            onChange={this.searchTxt.bind(this)}
            name=""
            id=""
          />
        </div>

        <div className="container-fluid bg-white py-4  ">
          <div className="container ">
            {" "}
            <h1 className="text-center py-4">Главные категории</h1>
            {categories.map((v) => (
              <Link to={v.to} key={v.to} className="category">
                <div className="icon" style={{ backgroundColor: v.backColor }}>
                  <img src={v.icon} alt="" />
                </div>
                {v.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="container">
            {" "}
            <div className="row  p-0">
              <h2 className="text-center py-4">Премиум объявления</h2>
              {Dataseach.map((v) => (
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className=" rounded mb-2 bg-white   size">
                    <div className="p-3">
                      {" "}
                      <img
                        className="w-100 h-100"
                        src={v.img}
                        alt="yuklanmoqda yoki oxirgisi"
                      />
                      <p className="fw-bold">{v.title}</p>
                      <p className="fw-bold fst-normal">{v.price}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">{v.location}</p>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-business-partner py-2">
            <div className="footer-business-partner__wrapper">
              <div className="footer-business-partner__slogan">
                <img
                  className="me-5"
                  src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"
                  alt=""
                />
                <strong>Начните бизнес в интернете с OLX!</strong>
                <a href="#">
                  <button className="btnn ms-5">Подробнее</button>
                </a>
              </div>
            </div>
          </div>

          <div className="container text-center pb-5">
            <h1 className="mb-5 fw">O|X</h1>
            Cервис объявлений № 1 в Узбекистане Частные объявления Узбекистана{" "}
            <br />
            на OLX (бывший torg.uz) - здесь вы найдете то, что искали. <br />{" "}
            Нажав на кнопку "Подать объявление", вы сможете разместить
            онлайн-объявление на любую необходимую тематику - <br />
            поиск работы, услуги, продажа автомобилей, недвижимости, электроники
            и многое другое. <br /> С помощью сервиса OLX в Узбекистане вы
            можете найти, продать или купить практически все, что угодно. <br />
            Воспользовавшись функцией поиска, вы без труда найдете уже
            опубликованные объявления интересующей вас тематики. <br /> OLX в
            Узбекистане - ваш надежный и незаменимый помощник.
            <div className="row writeDowner">
              {" "}
              <img
                src="	https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
                alt=""
              />
            </div>
            <p className="fs-9 mt-2">
              Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад,
              Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт,
              Отдам даром, Обмен
            </p>
          </div>
        </div>
      </Container>
    );
  }
}
export default Home;
