import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
        <div className="footer container">
          <div className="footer_left">
             <img src='https://imzo.uz/uploads/logo_white.svg' alt="" />
             <div className="contact_box_left_main">
                   <span><IoLocationOutline /> O'zbekiston, Toshkent, ko'ch. Sofdil, 132</span>
                   <span><AiOutlineMail /> info@imzo.uz</span>
                   <span><LuPhoneCall /> +998 (71) 207-77-77</span>
                </div>
          </div>
          <div className="footer_right">
             <ul>
                 <li className="ul_title">Kompaniya haqida</li>
                 <li>Zavod bo‘ylab virtual tur</li>
                 <li>Karyera</li>
             </ul>
             <ul>
                 <li className="ul_title">Mahsulotlar</li>
                 <li>Plastik romlar</li>
                 <li>Alyumin romlar</li>
                 <li>Eshiklar</li>
                 <li>Surilma tizimlari</li>
                 <li>Import tizimlari</li>
                 <li>Fasad tizimlari</li>
             </ul>
             <ul>
                <li className="ul_title">Franshiza</li>
                <li>Farg'ona</li>
                <li>Navoiy</li>
                <li>Nukus</li>
                <li>Buxoro</li>
                <li>Samarqand</li>
                <li>Andijon</li>
                <li>Namangan</li>
                <li>Surxondaryo</li>
             </ul>
             <ul>
                <li className="ul_title">Shourumlar</li>
                <li>Rasmiy</li>
                <li>Hamkorlar</li>
             </ul>
              <ul>
                 <li className="ul_title">Ijtimoiy tarmoqlar</li>
                <div className="contact_box_left_media">
                   <span><FaInstagram /></span>
                   <span><PiTelegramLogo /></span>
                   <span><SlSocialFacebook /></span>
                   <span><FiYoutube /></span>
                </div>
              </ul>
          </div>
        </div>
        <div className="line container"></div>
        <div className="footer_side container">
            <div className="footer_side_left">
              <p>© 2013–2024 IMZO. All rights reserved</p>
              <p>Maxfiylik siyosati</p>
              <p>Foydalanish kelishuvi</p>
            </div>
            <div className="footer_side_right">
              <p>Sayt yaratish <span>LIFESTYLE CREATIVE</span></p>
            </div>
        </div>

    </footer>
  )
}

export default Footer