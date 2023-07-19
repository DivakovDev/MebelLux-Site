import React, { useEffect } from "react";
import { Link } from "react-router-dom"

function NavigationBar() {

  useEffect(() => {
    const open = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");
    const exit = document.getElementById("exit-btn");

    const handleOpenClick = () => {
      nav.classList.add("open-nav");
    };

    const handleExitClick = () => {
      nav.classList.remove("open-nav");
    };

    open.addEventListener("click", handleOpenClick);
    exit.addEventListener("click", handleExitClick);

    return () => {
      open.removeEventListener("click", handleOpenClick);
      exit.removeEventListener("click", handleExitClick);
    };
  }, []);

  return (
    <>
      <nav id="nav">
        <div className="inner-wrapper">
          <h3>МебелЛукс</h3>
          <button id="exit-btn">✖</button>
        </div>
        <ul>
          <li className="selected">
              <Link to="/">Начало</Link>
            </li>
            <li>
              <Link to="/products">Продукти</Link>
            </li>
            <li>
              <Link to="#">За Компанията</Link>
            </li>
            <li>
              <Link to="#">Контакти</Link>
          </li>
        </ul>
        <p className="nav-info">
          Добре дошли в МебелЛукс, разгърнете своята креативност и
          майсторство, като разгледате нашите продукти и изпратите{" "}
          <a className="ask" href="#">запитване</a>!
        </p>
      </nav>
    </>
  );
}

export default NavigationBar;
