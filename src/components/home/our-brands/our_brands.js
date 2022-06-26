import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "./our_brands.scss";
import casa from "./img/casa.jpg";
import firno from "./img/firno.jpeg";

export default function OurBrands() {
  const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section className="our-brand">
            <div className="container">
            <div className='title-top d-flex' data-aos="zoom-in">
                <h1> {t("OurBrands.title.head")} </h1>
                <p>{t("OurBrands.title.txt")}</p>
                <span className='cir-sh'></span>
            </div>
            <div className="content-item d-flex">
                <div data-aos="slide-left">
                    <img src={casa} alt="casa cafe"/>
                    <h3>{t("OurBrands.casa")}</h3>
                    <a href=""><button className="btn-go-to">{t("OurBrands.btnShow")} </button></a>
                </div>
                <div data-aos="slide-right">
                    <img src={firno} alt="firno"/>
                    <h3>firno</h3>
                     <a href=""><button className="btn-go-to">{t("OurBrands.btnShow")} </button></a>
                </div>
      </div>
            </div>
        </section>
    );
}