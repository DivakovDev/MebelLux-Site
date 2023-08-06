import React, { useEffect } from "react";
import NavigationBar from '../components/navigation'
import Main from '../components/contactsMain'
import Footer from '../components/footer'
// import '../styles/contacts.css'

export default function Contacts(){
        return (
            <>
              <NavigationBar />
              <Main />
              <Footer/>
            </>
          );
}