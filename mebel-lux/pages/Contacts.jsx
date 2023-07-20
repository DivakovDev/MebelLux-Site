import React, { useEffect } from "react";
import NavigationBar from '/components/navigation.jsx'
import Main from '/components/contactsMain.jsx'
import Footer from '/components/footer.jsx'
import '../pages/contacts.css'

export default function Contacts(){
        return (
            <>
              <NavigationBar />
              <Main />
              <Footer/>
            </>
          );
}