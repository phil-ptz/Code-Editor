import React, { useState, useRef } from 'react';

function Editor({ code, setCode }) {
    const textAreaRef = useRef(null);

    const handleKeyDown = (event) => {
        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const beforeCursor = textarea.value.substring(0, start);
        const afterCursor = textarea.value.substring(end);

        const TAB_SIZE = 4; // Definiere die Tab-Größe (z.B. 4 Leerzeichen)

        // Wenn die Backspace-Taste gedrückt wird
        if (event.key === 'Backspace') {
            event.preventDefault();

            // Überprüfen, ob die letzten Zeichen vor dem Cursor eine Tab-Einrückung sind
            const tabRegex = new RegExp(` {${TAB_SIZE}}$`); // Überprüft auf 4 Leerzeichen
            const isTabBefore = tabRegex.test(beforeCursor);

            if (isTabBefore) {
                // Lösche die ganze Einrückung (4 Leerzeichen)
                const newCode = beforeCursor.slice(0, -TAB_SIZE) + afterCursor;
                setCode(newCode);

                // Setze den Cursor entsprechend zurück
                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start - TAB_SIZE;
                }, 0);
            } else {
                // Standard-Verhalten für Backspace, wenn keine Tab-Einrückung vorliegt
                const newCode = beforeCursor.slice(0, -1) + afterCursor;
                setCode(newCode);

                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start - 1;
                }, 0);
            }
        }

        // Wenn die Delete-Taste gedrückt wird
        if (event.key === 'Delete') {
            event.preventDefault();

            // Überprüfen, ob die nächsten Zeichen nach dem Cursor eine Tab-Einrückung sind
            const isTabAfter = afterCursor.startsWith(' '.repeat(TAB_SIZE));

            if (isTabAfter) {
                // Lösche die ganze Einrückung (4 Leerzeichen)
                const newCode = beforeCursor + afterCursor.slice(TAB_SIZE);
                setCode(newCode);

                // Cursor-Position bleibt an derselben Stelle
                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start;
                }, 0);
            } else {
                // Standard-Verhalten für Delete, wenn keine Tab-Einrückung vorhanden ist
                const newCode = beforeCursor + afterCursor.slice(1);
                setCode(newCode);

                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start;
                }, 0);
            }
        }

        // Tab-Verhalten für Enter bleibt gleich (wie zuvor implementiert)
        if (event.key === 'Enter') {
            event.preventDefault(); // Verhindert den Standard-Enter-Effekt

            // Aktuelle Zeile ermitteln
            const currentLine = beforeCursor.split('\n').pop();
            const indentRegex = /^\s*(def|class|for|while|if|elif|else|try|except|with)\b.*:\s*$/;
            const indentMatch = indentRegex.test(currentLine);
            const currentIndentation = currentLine.match(/^\s*/)[0];
            let newIndentation = currentIndentation;

            if (indentMatch) {
                newIndentation += ' '.repeat(TAB_SIZE); // Füge 4 Leerzeichen hinzu
            }

            const newCode = beforeCursor + '\n' + newIndentation + afterCursor;
            setCode(newCode);

            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = start + 1 + newIndentation.length;
            }, 0);
        }
    };

    const handleChange = (event) => {
        setCode(event.target.value); // Aktualisiert den Code-State
    };

    return (
        <div style={{ display: 'flex', margin: '0' }}>
            <textarea
                ref={textAreaRef}
                value={code} // Der Code-State, der vom Parent kommt
                onChange={handleChange}
                onKeyDown={handleKeyDown} // Keydown für Backspace, Delete und Enter
                style={{
                    flexGrow: 1,
                    width: '100%',
                    minHeight: '300px',
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    resize: 'none',
                    overflowY: 'hidden',
                    marginLeft: '15px',
                    marginRight: '15px',
                }}
                placeholder='Schreibe deinen Code hier...'
            />
        </div>
    );
}

export default Editor;

