import React from 'react';
import { useTranslation } from "react-i18next";
import "./our_influence.scss";

export default function OurInfluence() {
  const { t } = useTranslation();
  return (
    <section className='our-infl'>
        <div className='container'>
            <div className='txt-test-im'>
            <h1> {t("ourInfluence.head")} </h1>
            <h4>{t("ourInfluence.para")}</h4>
            <p>{t("ourInfluence.txtOne")}</p>
            <p>{t("ourInfluence.txtTow")}</p>
            </div>
        </div>
    </section>
  )
}
