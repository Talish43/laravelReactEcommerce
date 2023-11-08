import React from 'react'
import Home from './Pages/Home.jsx';
import Categories from './Pages/Categories.jsx';
import { Routes, Route } from 'react-router-dom';
function AdminRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    )
}

export default AdminRouting
