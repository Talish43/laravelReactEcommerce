import React from 'react'
import Home from './Pages/Home.jsx';
import Categories from './Pages/Categories.jsx';
import Users from './Pages/Users.jsx';
import { Routes, Route } from 'react-router-dom';
function AdminRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}

export default AdminRouting
