import LanguageList from "./LanguageList";
import Editor from "./Editor";
import Output from "./Output";
import React, { useState } from 'react';

function Code({ onLanguageChange }) {
    const [output, setOutput] = useState(''); // State für den Output
    const [code, setCode] = useState(''); // Code-State hier verwalten

    // Funktion zum Senden des Codes ans Backend
    const sendCodeToBackend = () => {
        fetch('http://127.0.0.1:5000/api/save_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }), // Sende den aktuellen Code an das Backend
        })
        .then(response => response.json())
        .then(data => {
            console.log('Erfolgreich gesendet:', data.message);
            setOutput(`${data.message}`); // Setze eine Ausgabe als Antwort
        })
        .catch((error) => {
            console.error('Fehler:', error);
        });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', margin: '40px 0', width: '100%' }}>
            {/* Language List bleibt links */}
            <LanguageList onLanguageChange={onLanguageChange} />
            
            {/* Editor und Output rechts */}
            <div style={{ flexGrow: 1, marginLeft: '15px' }}>
                {/* Editor für den Code */}
                <Editor code={code} setCode={setCode} sendCodeToBackend={sendCodeToBackend} />

                {/* Output für die Ausgabe */}
                <Output output={output} />

                {/* "Run Code"-Button, um den Code zu senden */}
                <button
                    onClick={sendCodeToBackend} // Aufruf der Funktion, wenn der Button gedrückt wird
                    style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Run Code
                </button>
            </div>
        </div>
    );
}

export default Code;
