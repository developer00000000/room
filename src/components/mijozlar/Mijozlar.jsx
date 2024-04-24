import { useTranslation } from "react-i18next";
import { GoArrowUpRight } from "react-icons/go";
import { LiaHandPointRightSolid } from "react-icons/lia";

const Mijozlar = () => {
  const {t}=useTranslation()
  return (
    <div className="mijozlar">
        <h3 className="mijozlar_title container">{t("clientTitle")}</h3>
        <div className="mijozlar_box container">
           <div className="mijozlar_box_blog">
             <img src="https://imzo.uz/uploads/otziv/39b447068dcf.png" alt="s" />
              <span>09.04.2024</span>
              <h4>{t("clientTitle")}</h4>
              <p>{t("clientText1")} </p>
               <div className="youtubeL">
               <LiaHandPointRightSolid />
               <a href=" https://youtu.be/imzo">https://youtu.be/imzo</a>
               </div>
              <p>{t("clientText2")}</p>
           </div>
           <div className="mijozlar_box_blog">
             <img src="https://imzo.uz/uploads/otziv/da058fbcd1be.png" alt="s" />
              <span>09.04.2024</span>
              <h4>{t("clientTitle")}</h4>
              <p>{t("clientText3")} </p>
               <div className="youtubeL">
               <LiaHandPointRightSolid />
               <a href=" https://youtu.be/CgcKjb7_N-w?si=iRhdtZLW2UUu5q_6">https://youtu.be/imzo</a>
               </div>
              <p>{t("clientText4")}</p>
           </div>
        </div>
        <div className="mahsulotlar_hammasi container">
        <span></span>
         <button className='malumotlar_btn'>{t("clientBtn")} <GoArrowUpRight className='open'/></button>
    </div>

    </div>
  )
}

export default Mijozlar