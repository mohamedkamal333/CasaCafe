import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.scss";

export default function Contact() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);



   function sendEmail(e) {
  e.preventDefault();

     emailjs.sendForm('service_b2sgk15', 'template_uvd5nbi', e.target, '1z7yA_-F7WdJKDfft').then(res => {
      console.log(res)
     }).catch(err => console.log(err))
  
  }



  return (
    <section className='contact-us'>
      <div className='container'>
        <div className='title-up'>
        <h1 data-aos="slide-down">{t("contactSend.head")}</h1>
        <span className='cir-sh'></span>
        </div>
        <div className='sub-form'>
          <form onSubmit={sendEmail}>

            <div className='row'>

              <div className='col-12 col-md-6' data-aos="slide-right">
              <label> {t("contactSend.name")} </label>
              <div >
              <input type="name" name="name" required/>
            </div>
              </div>

              <div className='col-12 col-md-6'  data-aos="slide-left">
            <label>{t("contactSend.email")}</label>
              <div>
              <input type="email" name="user_email" required/>
            </div>
                </div>

                <div className='col-12 col-md-6'  data-aos="slide-right" data-aos-delay="400">
              <label>{t("contactSend.phone")}</label>
                <div>
              <input type="phone" name="user_phone" required/>
            </div>
                </div>

                <div className='col-12'  data-aos="slide-up">
              <label>{t("contactSend.message")}</label>
                <div>
              <textarea name='message'></textarea>
            </div>
              </div>

              <div className='col-12'  data-aos="slide-up">
              <div>
              <input id="sub-send" type="submit" name='submit' value={t("contactSend.submit")}/>
            </div>
                </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  )
}
