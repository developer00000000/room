import es1 from '../../images/es1.jpg';
import es2 from '../../images/es2.jpg';
import es3 from '../../images/es3.jpg';
import es4 from '../../images/es4.jpg';
import es5 from '../../images/es5.jpg';
import es6 from '../../images/es6.jpg';
import es7 from '../../images/es7.jpg';
import es8 from '../../images/es8.jpg';
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';

const Mahsulotlar = () => {
  const {t}=useTranslation()
  return (
    <div className='container mahsulot' id="product">
       <h3 className='mahsulotlar_title'>{t("prodTitle")}</h3>
       <Swiper
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay: 600,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  className="mahsulotlar container"
  breakpoints={{
    350: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 25,
      loop: true,
    },
  }}
>
<SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es1} alt="ess" />
          <p>{t("prod1")}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es2} alt="ess" />
          <p>{t("prod2")}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es3} alt="ess" />
          <p>{t("prod3")}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es4} alt="ess" />
          <p>{t("prod4")}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es5} alt="ess" />
          <p>{t("prod5")}</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es6} alt="ess" />
          <p>{t("prod6")}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es7} alt="ess" />
          <p>{t("prod7")}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mahsulotlar_blog">
          <img src={es8} alt="ess" />
          <p>{t("prod8")}</p>
        </div>
      </SwiperSlide>
</Swiper>
    <div className="mahsulotlar_hammasi">
        {/* <span></span>
         <button className='malumotlar_btn'>{t("prodBtn")} <GoArrowUpRight className='open'/></button> */}
    </div>
    </div>
   
  );
};

export default Mahsulotlar;