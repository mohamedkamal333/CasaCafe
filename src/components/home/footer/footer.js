import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import "./footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-txt d-flex'>
                <Link to="contact"><h4> <i className="fa-solid fa-users" style={{margin: "0 10px"}}></i> {t("footer.contact")} </h4></Link>
                <p>{t("footer.txt")}</p>
                <h4> <a href="tel:966549693513">{t("footer.phone")}</a> <i className="fa-solid fa-phone" id='whillDir' style={{margin: "0 10px"}}></i></h4>
            </div>
        </div>
    </footer>
  )
}
