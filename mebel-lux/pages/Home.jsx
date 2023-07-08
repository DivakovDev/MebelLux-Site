import React, { useEffect } from "react";
import NavigationBar from '/components/navigation.jsx'
import Header from '/components/header.jsx'
import Main from '/components/main.jsx'



function Home() {
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

  useEffect(() => {
    const handleResize = () => {
      const widthElement = document.getElementById("width");
      widthElement.innerText = document.body.clientWidth;
      widthElement.classNameList.add("display-width");
      setTimeout(() => {
        widthElement.classNameList.remove("display-width");
      }, 2000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <Header />
      <Main />
    </>
  );
}

export default Home;
