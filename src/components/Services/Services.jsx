import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import cakeico from "../../img/cakeico.png";
import cupcakeico from "../../img/cupcakeico.png";
import waiter from "../../img/menu.png";
import { motion } from "framer-motion";

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* right */}
      <div className="awesome">
        {/* dark mode */}
        <span>خدمات تیم ما</span>
        <spane>
          متنوع ترین شیرینی ها در طعم و رنگ های
          <br />
          مختلف در انتظار شماست
        </spane>
        <a>
          <button className="button s-button">بارگیری رزومه</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>


      {/* left */}
      <div className="cards">

        <Card
          emoji={waiter}
          heading={"سفارش راحت و آسان"}
          detail={"امکان سفارش به صورت انلاین با قیمت های مناسب"}
        />
      
        <Card
          emoji={cakeico}
          heading={"کیک ها"}
          detail={"کیک های تولد با دیزاین فوق العاده"}
          color="rgba(252, 166, 31, 0.45)"
        />

        <Card
          emoji={cupcakeico}
          heading={"شیرینی ها"}
          detail={"انواع شیرینیجات ایرانی و خارجی"}
        />
        {/* 3rd */}

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
