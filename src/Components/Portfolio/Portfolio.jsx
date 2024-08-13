import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import portfolio from "../../img/Portfolio.png";
import SnakeGame from "../../img/snakegame.jpeg";
import Ems from "../../img/Ems.jpeg";
import CurrencyConvertor from "../../img/currencyConvertor.jpeg";
import RPSgame from "../../img/rpsGame.jpeg";
import TextEditor from "../../img/textEditor.jpeg";
import ShortUrl from "../../img/sortUrl.jpeg";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/**heading  */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      {/**Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://github.com/Sonal-Garg12/Sonal_Portfolio.git"
            target="_blank"
          >
            <img src={portfolio} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Sonal-Garg12/EMS_Hub.git" target="_blank">
            <img src={Ems} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Sonal-Garg12/CurrencyConvertor.git"
            target="_blank"
          >
            <img src={CurrencyConvertor} alt="" />
          </a>
        </SwiperSlide>
          
        <SwiperSlide>
          <a
            href="https://github.com/Sonal-Garg12/StonePaperScissorGame.git"
            target="_blank"
          >
            <img src={RPSgame} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Sonal-Garg12/SnakeGame.git"
            target="_blank"
          >
            <img src={SnakeGame} alt="" />
          </a>
        </SwiperSlide>
     
        <SwiperSlide>
          <a
            href=" https://github.com/Sonal-Garg12/TextEditor.git"
            target="_blank"
          >
            <img src={TextEditor} alt="" />
          </a>
       
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Sonal-Garg12/ShortURL.git"
            target="_blank"
          >
            <img src={ShortUrl} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Portfolio;
