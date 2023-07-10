function Main() {
  return (
    <>
      <main>
        <section className="panel">
          <img className="bed" src="./public/background1.png" alt="bed image" />
        </section>

        <div className="columns half">
          <div className="col left">
            <h3>Мебел Лукс</h3>

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
           <a>За нас</a>
           <a>Нашите продукти</a>
          </div>
          <div className="info-2">
            <a href="tel:+359 882078322" className="cta-btn">Телефон за връзка</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
