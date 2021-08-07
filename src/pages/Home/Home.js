import "./Home.css"
import React from 'react'
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

const Home = () => {
    return (
      <Container className="bg-dark">
        <div className="container">
          <input
            type="text"
            placeholder="755 465 объявлений рядом"
            className="input w-50 my-5 p-4"
            name=""
            id=""
          />
          <button className=" input button bg-white  p-4 w-50" >
           Поиск <FontAwesomeIcon  className="ms-3" icon={faSearch} />
          </button>
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
              {obj.map((v) => (
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
        </div>

        <div></div>
      </Container>
    );
  
    
}

export default Home;


