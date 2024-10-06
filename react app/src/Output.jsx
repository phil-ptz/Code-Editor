import React from 'react';

function Output({ output }) {
    return (
        <div style={{
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9',
            minHeight: '100px', // Mindesthöhe für das Ausgabe-Feld
            overflowY: 'auto', // Scrollbar bei Bedarf
            marginRight: '15px'
        }}>
            <h4>Ausgabe:</h4>
            <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                {output || "Keine Ausgabe vorhanden."} {/* Fallback-Text */}
            </pre>
        </div>
    );
}

export default Output;
