import React from "react";
import "./Intro.css";
import Cake from "../../img/cake.png";
import Cupcake from "../../img/cupcake.png";
import Donut from "../../img/donut.png";
import Cookies from "../../img/cookies.png";
import woman from "../../img/womancake.png";
import { motion } from "framer-motion";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

//   context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">

      {/* left side */}
      <div className="i-left">

        <div className="i-name">
          <span>شیرینی پزی هور</span>
          <span>
            و هور نامیست از نام های خدا
          </span>
        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">ارتباط با</button>
        </Link>

        {/* social icons */}
        <div className="i-icons">
          <img src={Instagram} alt="" />
        </div>
      </div>


      {/* right side */}
      <div className="i-right">

        <img
          src={woman}
          alt=""
          />
        <img
          src={Cookies}
          alt=""
        />
        
      </div>
    </div>
  );
};

export default Intro;
