import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouting from './AdminRouting.jsx';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRouting />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);
