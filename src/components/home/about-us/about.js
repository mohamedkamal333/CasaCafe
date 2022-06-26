import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import "./about.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "./img/background-logo.jpg";
export default function About() {
  const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
  return (
    <section className='about-us'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='logo-img' data-aos="fade-left">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='about-txt' data-aos="fade-right">
                        <h1>{t("aboutUs.title")}</h1>
                        <p>{t("aboutUs.txt")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
