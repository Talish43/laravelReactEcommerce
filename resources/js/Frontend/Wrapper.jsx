import React from 'react'
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Copyright from "./Components/Copyright.jsx";

function Wrapper({children}) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
            <Copyright/>
        </>
    )
}

export default Wrapper
