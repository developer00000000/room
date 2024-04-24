import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import { GoArrowUpRight } from "react-icons/go";
import { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const {t}= useTranslation()
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="hero container">
        <div className="hero_left">
          <div className="hero_left_box">
            <div className="hero_left_box_blog">
              <div className='blog_img'><img src={img1} alt="m1" /></div>
              <p>{t("hero1")}</p>
            </div>
            <div className="hero_left_box_blog">
            <div className='blog_img'><img src={img2} alt="m1" /></div>
              <p>{t("hero2")}</p>
            </div>
            <div className="hero_left_box_blog">
            <div className='blog_img'><img src={img3} alt="m1" /></div>
              <p>{t("hero3")}</p>
            </div>
            <div className="hero_left_box_blog">
            <div className='blog_img'><img src={img4} alt="m1" /></div>
              <p>{t("hero4")}</p>
            </div>
            <div className="hero_left_box_blog">
            <div className='blog_img'><img src={img5} alt="m1" /></div>
              <p>{t("hero5")}</p>
            </div>
            <div className="hero_left_box_blog">
            <div className='blog_img'><img src={img6} alt="m1" /></div>
              <p>{t("hero6")}</p>
            </div>
          </div>
          <button>{t("heroBtn")}<GoArrowUpRight className='open'/></button>
        </div>
        <div className="hero_right">
      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  onAutoplayTimeLeft={onAutoplayTimeLeft}
  className="mySwiper"

>
  <SwiperSlide>
    <div className="slide-content">
      <img src={img3} alt="e" />
      <h1 className="overlay-text">{t("heroTitle1")} </h1>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="slide-content">
      <img src={img6} alt="e" />
      <h3 className="overlay-text">{t("heroTitle2")}</h3>
    </div>
  </SwiperSlide>
  <div className="swiper-pagination" style={{ display: 'none' }}></div>
  <div className="autoplay-progress" slot="container-end">
    <span ref={progressContent} style={{ display: 'none' }}></span>
  </div> 
</Swiper>
        </div>
    </div>
  )
}

export default Hero