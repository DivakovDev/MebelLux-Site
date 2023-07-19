import React, { useEffect } from "react";
import NavigationBar from '/components/navigation.jsx'
import Main from '/components/prodMain.jsx'
import Footer from '/components/footer.jsx'
import '../pages/product.css'

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
        <Main/>
        <Footer/>
        </>
    )
}

export default Products