import React from 'react'
import {Link} from "react-router-dom"
function Sidebar() {
    return (
        <>
            {/* Sidebar Start */}
            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <Link to="/admin" className="text-nowrap logo-img">
                            <img src="/assets/backend/assets/images/logos/dark-logo.svg" width={180} alt=""/>
                        </Link>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"/>
                        </div>
                    </div>
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav scroll-sidebar">
                        <ul id="sidebarnav">
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/admin" aria-expanded="false"><span>
                                    <i className="ti ti-layout-dashboard"/></span>
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/admin/categories" aria-expanded="false">
                                    <span><i className="ti ti-article"/></span>
                                    <span className="hide-menu">Categories</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
            {/*  Sidebar End */}
        </>
    )
}

export default Sidebar
