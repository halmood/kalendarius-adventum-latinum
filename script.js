/**
 * Latein-Adventskalender - Zentrale JavaScript-Datei
 */

/**
 * Zeigt oder versteckt die Lösungsbox
 */
function showSolution() {
    const solutionBox = document.getElementById('solution');
    const button = document.querySelector('.solution-toggle');
    
    if (!solutionBox || !button) {
        console.error('Lösungsbox oder Button nicht gefunden');
        return;
    }
    
    if (solutionBox.style.display === 'none' || solutionBox.style.display === '') {
        solutionBox.style.display = 'block';
        button.textContent = 'Lösung verstecken';
        button.setAttribute('aria-expanded', 'true');
    } else {
        solutionBox.style.display = 'none';
        button.textContent = 'Lösung anzeigen & mehr erfahren';
        button.setAttribute('aria-expanded', 'false');
    }
}

/**
 * Initialisiert den Adventskalender (für index.html)
 */
function initializeCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0=Jan, 11=Dez
    
    // ============================================================
    // WICHTIG: TESTMODUS EIN/AUS
    // ============================================================
    // Für DEMO/TEST: Alle 24 Türchen sind geöffnet
    // Kommentieren Sie die nächste Zeile aus für den Produktivbetrieb!
    const currentDay = 24;
    
    // Für PRODUKTIVBETRIEB: Türchen öffnen sich täglich ab 1. Dezember
    // Entfernen Sie das "//" vor der nächsten Zeile:
    // const currentDay = today.getDate();
    // ============================================================
    
    // Prüfen, ob Dezember (Monat 11)
    const isDecember = currentMonth === 11;
    
    if (!isDecember) {
        console.log('⚠️ TESTMODUS AKTIV: Türchen 1-' + currentDay + ' sind freigeschaltet.');
        console.log('Der Kalender ist außerhalb des Dezembers normalerweise gesperrt.');
    }
    
    // Türchen aktivieren oder sperren
    for (let i = 1; i <= 24; i++) {
        const doorElement = document.getElementById(`door-${i}`);
        
        if (doorElement) {
            if (i <= currentDay) {
                // Türchen freischalten
                doorElement.href = `tag_${i}.html`;
                doorElement.classList.add('active');
                doorElement.setAttribute('aria-label', `Türchen ${i} öffnen`);
            } else {
                // Türchen sperren
                doorElement.classList.add('locked');
                doorElement.setAttribute('aria-label', `Türchen ${i} ist noch verschlossen`);
            }
        }
    }
}

// Event-Listener für DOM-Ready
document.addEventListener('DOMContentLoaded', function() {
    // Prüfen, ob wir auf der Kalenderseite sind
    if (document.getElementById('calendar-grid')) {
        initializeCalendar();
    }
});
