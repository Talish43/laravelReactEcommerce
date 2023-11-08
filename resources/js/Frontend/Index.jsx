import { createRoot } from 'react-dom/client'
import Home from "./Pages/Home.jsx";
import Fashion from "./Pages/Fashion.jsx";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Index() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
        </Routes>
    </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);
