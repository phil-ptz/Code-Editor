import React, { useState } from 'react';

function LanguageList({ onLanguageChange }) {
    const languages = [
        'JavaScript',
        'Python',
        'Java',
        'C++',
        'Ruby',
        'Go',
        'C#',
        'PHP',
        'Swift',
        'TypeScript'
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(language);
    };

    return (
        <div style={{
            width: '250px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9',
            marginLeft: '15px',
        }}>
            <h3>Programmiersprache</h3>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        onClick={() => handleLanguageClick(language)}
                        style={{
                            padding: '10px',
                            marginBottom: '5px',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            backgroundColor: selectedLanguage === language ? '#007bff' : '#ffffff',
                            color: selectedLanguage === language ? '#ffffff' : '#333',
                            border: selectedLanguage === language ? '2px solid #0056b3' : '1px solid #ccc',
                            transition: 'background-color 0.3s, border 0.3s',
                        }}
                    >
                        {language}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LanguageList;
