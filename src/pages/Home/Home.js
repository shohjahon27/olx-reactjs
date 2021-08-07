import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

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
];  

const obj = [
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
    title: "Навстройка Сарканд Дарвоза 2 ком",
    price: "380 у.е.",
    location: "Ташкент, Шайхантахурский район 5 авг.",
  },
  {
    img: "https://apollo-olx.cdnvideo.ru/v1/files/8n9et1e4ghga3-UZ/image;s=644x461",
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
      <Container>
        <div className="container py-4">
          <h1 className="text-center">Главные категории</h1>
          {categories.map((v) => (
            <Link to={v.to} key={v.to} className="category">
              <div className="icon" style={{ backgroundColor: v.backColor }}>
                <img src={v.icon} alt="" />
              </div>
              {v.title}
            </Link>
          ))}
        </div>
        <div>
          <div className="row d-flex p-0">
            <h2 className="text-center ">Премиум объявления</h2>
            {obj.map((v) => (
              <div className="col col-sm-12 col-md-4 col-lg-3">
                <div className="card m-2 ">
                  <img src={v.img} alt="" />
                  <p>{v.title}</p>
                  <p>{v.price}</p>
                  <p>{v.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  
    
}

export default Home;


