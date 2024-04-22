import { GoArrowUpRight } from "react-icons/go";

const Shourumlar = () => {
  return (
    <div className="shourumlar container">
        <h3>Shourumlar</h3>
        <div className="shourumlar_box">
          <p>O'zbekiston bo'ylab rasmiy shourumlar</p>
           <div className="shourumlar_box_btn">
             <button>Toshkent</button>
             <button>Batafsil <GoArrowUpRight className='open open_none'></GoArrowUpRight></button>
           </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
  <a href="https://yandex.uz/maps/org/3832392943/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Akfa imzo</a>
  <a href="https://yandex.uz/maps/10335/tashkent/category/windows/184107727/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Окна в Ташкенте</a>
  <a href="https://yandex.uz/maps/10335/tashkent/category/doors/184107677/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}>Двери в Ташкенте</a>
  <iframe src="https://yandex.uz/map-widget/v1/?ll=69.178618%2C41.277130&mode=search&oid=3832392943&ol=biz&z=15.97" width="100%" height="400" frameborder="0" allowfullscreen="true" style={{ position: 'relative' }}></iframe>
</div>
        {/* <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A1b58d5222685095e071ae3ba53e2cfa45ff58ae666679f5ae74590fcdf0f32c6&amp;source=constructor&amp;ll=69.178618%2C41.277130&amp;z=15.97" width="100%" height="600" frameborder="0"></iframe> */}
    </div>
  )
}

export default Shourumlar