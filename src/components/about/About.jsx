// import logo from '../../images/logoImzo.svg';
import logo from '../../images/rama.uz.jpg';
import office from  '../../images/imzoof.jpg'
import { GoArrowUpRight } from "react-icons/go";
import sv1 from '../../images/sg1.svg' ;
import sv2 from '../../images/sg2.svg' ;
import sv3 from '../../images/sg3.svg' ;
import sv4 from '../../images/sg4.svg' ;
import { useTranslation } from 'react-i18next';



const About = () => {
    const {t}=useTranslation()
  return (
   <>
      <div className="about container">
        <div className="about_left">
           <img src={logo} alt="logo" />
           <p>{t("prodText")}</p>
            <button>{t("prodBtn")} <GoArrowUpRight className='open'/></button>
        </div>
        <div className="about_right">
             <img src={office} alt="" />
        </div>

      </div>
      <div className="about_work container">
         <div className="about_work_blog">
             <div>
             <span>1000 +</span>
            <p>{t("prodText1")}</p>
             </div>
             <img src={sv1} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>70 000</span>
            <p>m<sup>2</sup> {t("prodText2")}</p>
             </div>
             <img src={sv2} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>2 000 000 m<sup>2</sup></span>
            <p>{t("prodText3")}</p>
             </div>
             <img src={sv3} alt="" />
         </div>
         <div className="about_work_blog">
             <div>
             <span>15</span>
            <p>{t("prodText4")}</p>
             </div>
             <img src={sv4} alt="" />
         </div>
      </div>

   </>
  )
}

export default About