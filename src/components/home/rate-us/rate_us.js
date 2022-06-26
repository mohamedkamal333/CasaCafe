import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "./rate_us.scss";
import active from "./img/active.png";
import like from "./img/like.png";


export default function RateUs() {
	const { t } = useTranslation();
	useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
  return (
    <section className='rate-us'>
        <div className='container'>
        <div className='title-top d-flex' data-aos="zoom-in">
                <h1> {t("rateUs.title.head")} </h1>
                <p>{t("rateUs.title.txt")}</p>
                <span className='cir-sh'></span>
            </div>

            {/* card */}

            <div id='timeline'>
	<div className="demo-card-wrapper">
		<div className="demo-card demo-card--step1">
			<div className="head">
				<div className="number-box">
					<span>01</span>
				</div>
				<h2><span className="small"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </span>{t("rateUs.one.head")}</h2>
			</div>
			<div className="body">
				<p> {t("rateUs.one.txt")} </p>
				<img src={active} alt="active"/>
			</div>
		</div>

		<div className="demo-card demo-card--step2">
			<div className="head">
				<div className="number-box">
					<span>02</span>
				</div>
				<h2><span className="small"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></span>{t("rateUs.tow.head")}</h2>
			</div>
			<div className="body">
				<p>{t("rateUs.tow.txt")}</p>
			</div>
		</div>

		<div className="demo-card demo-card--step3">
			<div className="head">
				<div className="number-box">
					<span>03</span>
				</div>
				<h2><span className="small"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></span>{t("rateUs.three.head")}</h2>
			</div>
			<div className="body">
				<p>{t("rateUs.three.txt")}</p>
			</div>
		</div>

		<div className="demo-card demo-card--step4">
			<div className="head">
				<div className="number-box">
					<span>04</span>
				</div>
				<h2><span className="small"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></span>{t("rateUs.four.head")}</h2>
			</div>
			<div className="body">
				<p>{t("rateUs.four.txt")}</p>
				<img id='like' src={like} alt="like"/>
			</div>
		</div>

		<div className="demo-card demo-card--step5">
			<div className="head">
				<div className="number-box">
					<span>05</span>
				</div>
				<h2><span className="small"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></span>{t("rateUs.five.head")}</h2>
			</div>
			<div className="body">
				<p>{t("rateUs.five.txt")}</p>
			</div>
		</div>
    
	</div>
</div>


            {/* end card */}
        </div>
    </section>
  )
}
