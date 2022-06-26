import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "./features.scss";
import cofe from "./img/coffe.png";
import milk from "./img/milk.png";
import cow from "./img/cow.png";

export default function Features() {
  const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 8000 });
    }, [])
  return (
    <section className="features">
        <div className='container'>
            <div className='title-top d-flex' data-aos="zoom-in">
                <h1> {t("ourInterest.title")} </h1>
                <p> {t("ourInterest.txt")} </p>
                <span className='cir-sh'></span>
            </div>
            <div className='pr-t'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='feat' data-aos="slide-up">
                        <img src={cofe} alt="meat"/>
                        <h4> {t("ourInterest.itemOne")} </h4>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                <div className='feat' data-aos="slide-up" data-aos-delay="200">
                        <img src={milk} alt="meat"/>
                        <h4>{t("ourInterest.itemTow")}</h4>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                <div className='feat' data-aos="slide-up" data-aos-delay="400">
                        <img src={cow} alt="cow"/>
                        <h4>{t("ourInterest.itemThree")}</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
