function NavigationBar() {
  return (
    <>
      <nav id="nav">
        <div className="inner-wrapper">
          <h3>МебелЛукс</h3>
          <img
            id="exit-btn"
            src="./public/cross-svgrepo-com.svg"
            alt="close navigation bar"
          />
        </div>
        <ul>
          <li className="selected">
            <a href="#">Начало</a>
          </li>
          <li>
            <a href="#">Продукти</a>
          </li>
          <li>
            <a href="#">За Компанията</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
        <p>
          Добре дошли в МебелЛукс, разгърнете своята креативност и
          майсторство, като разгледате нашите продукти и изпратите{" "}
          <a href="#">запитване</a>!
        </p>
      </nav>
    </>
  );
}

export default NavigationBar;
