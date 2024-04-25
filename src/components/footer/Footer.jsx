import { IoLocationOutline } from "react-icons/io5";
import logo from '../../images/rama.uz.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const {t}= useTranslation()
  return (
    <footer id="footer">
        <div className="footer container">
          <div className="footer_left">
             <img src={logo} alt="" />
             <div className="contact_box_left_main">
                   <span><IoLocationOutline className="contact_icons"/>  {t("footerText")}</span>
                   <span><AiOutlineMail  className="contact_icons"/> info@rama.uz</span>
                   <span><LuPhoneCall className="contact_icons"/> +998 (71) 443-11-33</span>
                   <span><LuPhoneCall className="contact_icons"/> +998 (90) 915-11-33</span>
                </div>
          </div>
          <div className="footer_right">
             {/* <ul>
                 <li className="ul_title">{t("footerTitle1")}</li>
                 <li>{t("footerLi1")}</li>
                 <li>{t("footerLi2")}</li>
             </ul>
             <ul>
                 <li className="ul_title">{t("footerTitle2")}</li>
                 <li>{t("footerLi3")}</li>
                 <li>{t("footerLi4")}</li>
                 <li>{t("footerLi5")}</li>
                 <li>{t("footerLi6")}</li>
                 <li>{t("footerLi7")}</li>
                 <li>{t("footerLi8")}</li>
             </ul>
             <ul>
                <li className="ul_title">{t("footerTitle3")}</li>
                <li>{t("footerLi9")}</li>
                <li>{t("footerLi10")}</li>
                <li>{t("footerLi11")}</li>
                <li>{t("footerLi12")}</li>
                <li>{t("footerLi13")}</li>
             </ul>
             <ul>
                <li className="ul_title">{t("footerTitle4")}</li>
                <li>{t("footerLi14")}</li>
                <li>{t("footerLi15")}</li>
             </ul> */}
              {/* <ul>
                 <li className="ul_title">{t("footerTitle5")}</li>
                <div className="contact_box_left_media">
                   <span><FaInstagram /></span>
                   <span><PiTelegramLogo /></span>
                   <span><SlSocialFacebook /></span>
                   <span><FiYoutube /></span>
                </div>
              </ul> */}
          </div>
        </div>
        <div className="line container"></div>
        <div className="footer_side container">
            <div className="footer_side_left">
              <p>{t("footerText2")}</p>
              <p>{t("footerText3")}</p>
              <p>{t("footerText4")}</p>
              <div className="contact_box_left_media foter">
                   <a href="https://www.instagram.com/rama_.uz?igsh=MWxhdTQzMThucGNnMw=="><span><FaInstagram /></span></a>
                   <span><PiTelegramLogo /></span>
                   <span><SlSocialFacebook /></span>
                   <span><FiYoutube /></span>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer