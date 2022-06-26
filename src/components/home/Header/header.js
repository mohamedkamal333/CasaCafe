import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "./header.scss";

export default function Header() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])
  return (
    <header className='header'>
        <div className='container'>
          <div className='title-txt' data-aos="flip-right">
            <h1>{t("header.head")}</h1>
            <span className='cir-sh'></span>
            <p>{t("header.txtOne")}</p>
            <p>{t("header.txtTow")}</p>
            <Link to="contact"><button className='btn-contact'>{t("header.btnContact")}</button></Link>
          </div>

        </div>
    </header>
  )
}
