import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const {t}=useTranslation()
  return (
    <div className='contact' id="contact">
        <h3 className="container">{t("contactTitle")}</h3>
         <div className="contact_box container">
            <div className="contact_box_left">
                <h4>{t("contactTitle2")}</h4>
                <p>{t("contactText")}</p>
                <div className="contact_box_left_main">
                   <span><IoLocationOutline className="contact_icons"/> {t("contactText2")}</span>
                   <span><AiOutlineMail className="contact_icons"/> info@rama.uz</span>
                   <a href="tel: +998714431133"><span><LuPhoneCall className="contact_icons"/> +998 (71) 443-11-33</span></a>
                   <a href="tel: +998909151133"><span><LuPhoneCall className="contact_icons"/> +998 (90) 915-11-33</span></a>
                </div>
                <div className="contact_box_left_media">
                   <a href="https://www.instagram.com/rama_.uz?igsh=MWxhdTQzMThucGNnMw=="> <span><FaInstagram /></span></a>
                   <span><PiTelegramLogo /></span>
                   <span><SlSocialFacebook /></span>
                   <span><FiYoutube /></span>
                </div>
            </div>
            <div className="contact_box_right">
               <form className="form1" action="https://formspree.io/f/xqkrwrog" method="POST">
                <input name="Name" type="text" placeholder={t("contactPl2")} required/>
                <input name="Number" type="number" placeholder={t("contactPl5")} required/>
                <div className="tasdiqlash">
                
                <button type="submit">{t("contactBtn2")}</button>
            </div>
               </form>
                {/* <div className="tasdiqlash">
                
                    <button>{t("contactBtn2")}</button>
                </div> */}
            </div>
         </div>
    </div>
  )
}

export default Contact