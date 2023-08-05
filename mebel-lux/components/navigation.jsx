import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function NavigationBar() {

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
          <h3>МебелЛукс-М</h3>
          <button id="exit-btn">✖</button>
        </div>
        <ul id="myMenu">
          <li>
              <Link to="/">Начало</Link>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/for-us">За Компанията</Link>
            </li>
            <li>
              <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
        <p className="nav-info">
          Добре дошли в МебелЛукс, разгърнете своята креативност и
          майсторство, като разгледате нашите продукти и изпратите{" "}
          <Link className="ask" to="/contacts">запитване!</Link>        
        </p>
      </nav>
    </>
  );
}
