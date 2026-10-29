import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const Footer = () => {
    return (
        <footer>
            <h1>Footer</h1>
        </footer>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

