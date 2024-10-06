import React, { useState } from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Code from "./Code.jsx";

function App() {
    const [language, setLanguage] = useState('JavaScript'); // Standard-Sprache ist JavaScript

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div>
            <Header />
            <Code onLanguageChange={handleLanguageChange} />
            <Footer />
        </div>
    );
}

export default App;
