import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main id="for-us-main">
        <section className="panel">
          <img className="workshop-img" src="../images/for-us.jpg" alt="bed image" />
        </section>

        <div className="columns half">
          <div className="col left">
            <h3 className="for-us-title">За Компанията</h3>

            <p className="for-us-info-p">
              Фирма Мебеллукс произвеждаа мебели от естествена дървесина.
              Притежава дългогодишен опит в областта на мебелопроизводството и е
              оборудвана с модерни машини, които дават оптимална възможност за
              производството на качествени мебели. Продукцията ни се е наложила
              на Българския пазар благодарение на качество, конкурентни цени и
              най - вече на стремежа за удоволетворяване желанията на клиентите.
              Фирмата има богато разнообразие от материали и цветове с което се
              дава възможност на клиента да импровизира в идеите си.
            </p>
            <div className="info for-us-info">
              <Link to="/products">Нашите продукти</Link>
              <Link to="/contacts">Контакти</Link>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
