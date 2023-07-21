import { Link } from "react-router-dom"

function Main() {
  return (
    <>
      <main>
        <section className="panel">
          <img className="bed" src="../images/background1.png" alt="bed image" />
        </section>

        <div className="columns half">
          <div className="col left">
            <h1>МебелЛукс-М</h1>

            <p>
              Фирма "Мебеллукс" е производител на висококачествени мебели от
              масивна дървесина. Дългогодишният опит в областта на
              мебелопроизводството и модерните машини, дават оптимална
              възможност за производство на качествени мебели. Изработваме както
              стандартни мебели, така и мебели по поръчка на клиента. Работим с
              много партньорски фирми, които предоставят крайният продукт до
              клиенти в цялата страна. Пълен списък с нашите партноьрски фирми,
              както и информация за поръчка можете да откиете в менюто.
            </p>
          </div>
          <div className="info">
           <Link to="/for-us">За нас</Link>
           <Link to="/products">Нашите продукти</Link>
          </div>
        </div>

        <div className="facebook-page">
          <div className="top-section-facebook">
            <img className="profile-picture" src="../images/kitchen.jpg" alt="facebook-profile-picture" />
            <div className="right-side">
              <h1 className="facebook-page-name">Mebel-Lux-M</h1>
              <p className="followers">1,235 followers</p>
            </div>
          </div>
          <div className="bootom-section">
            <button>F Follow Page</button>
          </div>

        </div>
      </main>
    </>
  );
}

export default Main;
