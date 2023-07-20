import React, { useEffect } from "react";
import NavigationBar from '/components/navigation.jsx'
import Main from '/components/forUsMain.jsx'
import Footer from '/components/footer.jsx'
import '../pages/for-us.css'

export default function ForUs(){
        return (
            <>
              <NavigationBar />
              <Main />
              <Footer/>
            </>
          );
}