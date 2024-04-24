import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruLang from '../locale/ru/default.json';
import uzLang from '../locale/uz/default.json';


const i18next = () => {
    i18n.use(initReactI18next).init({
       resources:{
        ru:{translation:ruLang},
        uz:{translation:uzLang},
      },
      lng:'ru',
      fallbackLng:'ru',
      interpolation: {
        escapeValue: false,
      },
})
      
  // return (
  //   <div>


  //   </div>
  // )
}

export default i18next