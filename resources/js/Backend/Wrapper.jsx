import React from 'react'
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
function Wrapper({children}) {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <Sidebar/>
                {/*  Main wrapper */}
                <div className="body-wrapper">
                    <Header/>
                    <div className="container-fluid" style={{ maxWidth: '100%' }}>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Wrapper
