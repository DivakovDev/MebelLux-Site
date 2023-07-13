import React, { useEffect } from "react";
import NavigationBar from '/components/navigation.jsx'
import Header from '/components/header.jsx'
import Footer from '/components/footer.jsx'

function Products(){
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


    return(
        <>
        <NavigationBar />
        <Header />
        <Footer/>
        </>
    )
}

export default Products