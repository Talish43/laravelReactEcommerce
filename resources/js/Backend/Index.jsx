import React from 'react';
import { createRoot } from 'react-dom/client'
import Home from "./Pages/Home.jsx";

export default function Index() {
    return (
        <div>
            <Home />
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);
