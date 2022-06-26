import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "./services.scss";
import rocket from "./img/rocket.png";
import light from "./img/light.png";

export default function Services() {
  const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
  return (
    <section className='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='sh-txt' data-aos="slide-left">
                    <img src={light} alt="light"/>
                        <h2> {t("services.one.head")} </h2>
                        <p> {t("services.one.txt")} </p>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='sh-txt' data-aos="slide-right">
                        <img src={rocket} alt="rocket"/>
                        <h2>{t("services.tow.head")}</h2>
                        <p>{t("services.tow.txt")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
