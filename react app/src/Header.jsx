

function Header() {
    return(
        <header style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between', // Platziere Titel links und Links rechts
            alignItems: 'center', // Vertikale Ausrichtung der Elemente
            padding: '10px 20px', // Innenabstand
            backgroundColor: 'black', // Gesamte Hintergrundfarbe des Headers schwarz
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optionaler Schatten
            color: 'white', // Schriftfarbe auf weiß setzen
        }}>
            <h1 style={{ margin: '0', fontSize: '24px' }}>Code Editor</h1>
            <nav>
                <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    display: 'flex',
                    margin: '0',
                }}>
                    <li style={{ margin: '0 15px' }}><a href='/' style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                    <li style={{ margin: '0 15px' }}><a href='/' style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                    <li style={{ margin: '0 15px' }}><a href='https://github.com/phil-ptz/' style={{ color: 'white', textDecoration: 'none' }}>GitHub</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;