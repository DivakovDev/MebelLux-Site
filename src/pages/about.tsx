import React, { useEffect } from "react";
import NavigationBar from '../components/navigation'
import Main from '../components/forUsMain'
import Footer from '../components/footer'
// import '../style/for-us.css'

export default function ForUs(){
        return (
            <>
              <NavigationBar />
              <Main />
              <Footer/>
            </>
          );
}