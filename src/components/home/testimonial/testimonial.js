import React from 'react';
import { useTranslation } from "react-i18next";
import "./testimonial.scss";
import img from "./img/idea.png";

export default function Testimonial() {
  const { t } = useTranslation();
  return (
    <section className='testimonial'>
        <div className='container'>
            <div className='content-txt'>
                <div className='img'>
                    <img src={img} alt="idea"/>
                </div>
                <div className='d-txt-sh'>
                    <h1> {t("testImonial.title")} </h1>
                    <p> {t("testImonial.txt")} </p>
                </div>
            </div>
        </div>
    </section>
  )
}
