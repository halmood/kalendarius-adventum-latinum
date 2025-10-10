# 🏛️ Latein-Adventskalender

Ein interaktiver digitaler Adventskalender für den Lateinunterricht mit 24 spannenden Rätseln zur römischen Antike.

## 🎯 Über dieses Projekt

Dieser Adventskalender wurde speziell für (angehende) Lateinschüler:innen entwickelt und bietet täglich vom 1. bis 24. Dezember ein neues Rätsel rund um die römische Kultur, Sprache und Geschichte. Jedes Türchen enthält interessante Fakten und zeigt, wie sehr Latein noch heute unsere Sprache prägt.

## ✨ Features

- **24 interaktive Rätsel** zu verschiedenen Themen der Antike
- **Responsive Design** - funktioniert auf Desktop, Tablet und Smartphone
- **Automatische Freischaltung** - Türchen öffnen sich täglich ab dem 1. Dezember
- **Keine Installation nötig** - läuft direkt im Browser
- **Keine externe Abhängigkeiten** - alle Dateien sind lokal
- **Einfach anpassbar** - Texte und Styling können leicht geändert werden

## 📥 Download & Nutzung

Dieser Kalender steht unter der MIT-Lizenz und kann frei für Bildungszwecke verwendet werden:

1. **Download:** Klicken Sie auf den grünen **"Code"**-Button → **"Download ZIP"**
2. **Entpacken:** ZIP-Datei entpacken
3. **Öffnen:** `index.html` im Browser öffnen oder auf Ihren Webserver hochladen
4. **Fertig!** Der Kalender ist sofort einsatzbereit

### Alternative: Git Clone
```bash
git clone https://github.com/IhrUsername/latein-adventskalender.git
cd latein-adventskalender
```

## 🎓 Themen der 24 Türchen

Die Rätsel behandeln unter anderem:
- Lateinische Grundwörter (ego, donum, aqua)
- Römische Götter (Jupiter, Venus)
- Alltag im alten Rom (Toga, Stola, Tabula)
- Römische Infrastruktur (Via Appia, Aquädukte, Thermen)
- Berühmte Aussprüche (Veni, vidi, vici)
- Kulturelle Einrichtungen (Colosseum)
- Monatsnamen und Kalender
- Und vieles mehr!

## 🔧 Anpassung

Der Kalender kann einfach an Ihre Bedürfnisse angepasst werden:

### Texte ändern
- Öffnen Sie die jeweilige `tag_X.html` Datei im Texteditor
- Passen Sie Rätsel und Lösungen nach Belieben an

### Design anpassen
- Farben, Schriftarten und Layout können in `styles.css` geändert werden
- Das Design nutzt ein festliches rot-goldenes Farbschema

### Testmodus vs. Produktivmodus

**⚠️ WICHTIG:** Der Kalender wird standardmäßig im **Testmodus** ausgeliefert (alle 24 Türchen sind geöffnet).

#### Für den Produktivbetrieb umstellen:

Öffnen Sie die Datei `script.js` und suchen Sie diese Zeilen (ca. Zeile 35):

```javascript
// Für DEMO/TEST: Alle 24 Türchen sind geöffnet
// Kommentieren Sie die nächste Zeile aus für den Produktivbetrieb!
const currentDay = 24;

// Für PRODUKTIVBETRIEB: Türchen öffnen sich täglich ab 1. Dezember
// Entfernen Sie das "//" vor der nächsten Zeile:
// const currentDay = today.getDate();
```

**Ändern Sie es zu:**

```javascript
// Für DEMO/TEST: Alle 24 Türchen sind geöffnet
// Kommentieren Sie die nächste Zeile aus für den Produktivbetrieb!
// const currentDay = 24;

// Für PRODUKTIVBETRIEB: Türchen öffnen sich täglich ab 1. Dezember
// Entfernen Sie das "//" vor der nächsten Zeile:
const currentDay = today.getDate();
```

**So funktioniert der Produktivmodus:**
- ✅ Türchen öffnen sich automatisch ab dem 1. Dezember
- ✅ Jeden Tag wird ein neues Türchen freigeschaltet
- ✅ Außerhalb des Dezembers sind alle Türchen gesperrt
- ✅ Am 24. Dezember sind alle Türchen offen

## 📁 Dateistruktur

```
latein-adventskalender/
├── index.html          # Hauptseite mit Kalender-Übersicht
├── styles.css          # Zentrales Styling
├── script.js           # JavaScript-Logik
├── tag_1.html          # Türchen 1
├── tag_2.html          # Türchen 2
├── ...
└── tag_24.html         # Türchen 24
```

## 🖥️ Technische Details

- **Reine HTML/CSS/JavaScript** - keine Frameworks nötig
- **Keine Serverkomponenten** - läuft komplett im Browser
- **Keine Cookies oder Tracking**
- **Barrierefrei** - mit ARIA-Labels und semantischem HTML
- **Mobile-First Design** - optimiert für alle Bildschirmgrößen

## 👩‍🏫 Einsatz im Unterricht

### Möglichkeiten:
- Als digitaler Adventskalender für die Klasse
- Auf der Schulwebseite einbinden
- Als Hausaufgabe: Täglich ein Rätsel lösen
- Für Latein-AGs oder Vertretungsstunden
- Als Inspiration für eigene Rätsel

### Tipp für Lehrer:
Sie können die Rätsel an das Niveau Ihrer Klasse anpassen oder durch eigene Aufgaben ersetzen. Jede `tag_X.html` Datei folgt dem gleichen, einfachen Aufbau.

## 🤝 Beitragen

Verbesserungsvorschläge, neue Rätsel-Ideen oder Fehlerberichte sind willkommen!
- **Issues** für Fehlerberichte oder Vorschläge
- **Pull Requests** für konkrete Verbesserungen

## 📜 Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**. 

Das bedeutet:
- ✅ Freie Nutzung für private und schulische Zwecke
- ✅ Änderungen und Anpassungen erlaubt
- ✅ Weitergabe erlaubt (auch in veränderter Form)
- ℹ️ Keine Garantie oder Haftung

## 🌟 Credits

Entwickelt als Open-Source-Bildungsprojekt für den Lateinunterricht.

---

**📧 Fragen oder Feedback?** Öffnen Sie gerne ein Issue auf GitHub!

**🎄 Viel Spaß beim Entdecken der römischen Antike!**
