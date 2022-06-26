import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Langs from './langs/langs';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className='nav-bar'>
        <div className='container'>
        <div className='con-top'>
            <div className='at-name'>
              <Link to="/">
              <p style={{borderBottom: "1px solid #333"}}>ع مؤسسه زياد عبدالله سعيد الدوسري للتجارة </p>
              <p>Establishment Ziyad Abdullah Saeed Al-Dosari for Trade E</p>
              </Link>
            </div>
            <div className='contact-me'>
              <Link to="contact" > <h3>{t("navbarr.contact")}</h3> </Link><Langs/>
            </div>
          </div>
        </div>
    </div>
  )
}
