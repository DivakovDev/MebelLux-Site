import React, { useEffect } from "react";
import Link from "next/link"

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

    // open.addEventListener("click", handleOpenClick);
    // exit.addEventListener("click", handleExitClick);

    return () => {
      // open.removeEventListener("click", handleOpenClick);
      // exit.removeEventListener("click", handleExitClick);
    };
  }, []);

  function selectItem(item) {
    // Toggle the "selected" class on the clicked item
    document.getElementById('item').classList.add("selected");
  }

  return (
    <>
      <nav id="nav">
        <div className="inner-wrapper">
          <h3>МебелЛукс-М</h3>
          <button id="exit-btn">✖</button>
        </div>
        <ul id="myMenu">
          <li onClick={selectItem} className="nav-link selected">
              <Link href="/">Начало</Link>
          </li>
          <li onClick={selectItem} className="nav-link">
              <div className="dropdown">
                <button className="dropbtn">Продукти</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
          </li>
          <li onClick={selectItem} className="nav-link">
              <Link href="/for-us">За Компанията</Link>
          </li>
          <li onClick={selectItem} className="nav-link">
              <Link href="/contacts">Контакти</Link>
          </li>
        </ul>
        <p className="nav-info">
          Добре дошли в МебелЛукс, разгърнете своята креативност и
          майсторство, като разгледате нашите продукти и изпратите{" "}
          <Link className="ask" href="/contacts">запитване!</Link>        
        </p>
      </nav>
    </>
  );
}
