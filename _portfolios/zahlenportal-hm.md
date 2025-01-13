---
layout: portfolio
title: Zahlenportal der Hochschule München
description: Hilfe zur Selbsthilfe bieten – Relevante Studierenden Zahlen zu jeder Zeit.
featured: false
technologies: Angular, JavaScript, Bootstrap, SQL, REST, D3.js
date: 2018-03-15
image:
link:
type: Website
---

## Herausforderungen und Lösungen

Während meiner Zeit bei der Hochschule München wurde ich täglich mit der Herausforderung konfrontiert, dass Studierendenzahlen in verschiedensten Varianten an diverse Stakeholder manuell übermittelt werden mussten. Die Prozesse waren zeitaufwendig, fehleranfällig und oft unklar, welche spezifischen Daten benötigt wurden. Begrifflichkeiten wie „1. Hochschulsemester“ vs. „1. Fachsemester“, Auswahlkriterien wie „deutsche“ vs. „internationale“ Studierende und die zu betrachtenden Zeiträume sorgten häufig für Missverständnisse und angespannte Situationen – besonders an den Stichtagen, dem 15. Mai und 15. November.

Ich beobachtete diese Prozesse über mehrere Monate und überlegte, wie sich diese Situation verbessern ließe. Mein Ziel war es, allen Beteiligten eine „Hilfe zur Selbsthilfe“ zu bieten: eine Plattform, über die Stakeholder jederzeit selbstständig auf relevante und häufig benötigte Daten zugreifen können.

### Die Idee: Das Zahlenportal der Hochschule München

Ich schlug vor, ein Zahlenportal zu entwickeln – eine interaktive Website, die es ermöglicht, Studierendenzahlen von der Gesamthochschule bis hinunter zu einzelnen Studiengängen in Tabellen und Diagrammen einzusehen und für weitere Analysen herunterzuladen.

Um meine Idee überzeugend zu präsentieren, entwickelte ich ein statisches Mockup der Website. Nach meiner Präsentation erhielt das Projekt viel Zuspruch, und wir konnten die Umsetzung starten.

Für die technische Realisierung entschieden wir uns für **Angular** als Frontend-Framework, da es uns eine klare Struktur für die Entwicklung einer modernen, performanten und wartbaren Anwendung bot. Angular ermöglichte uns die Erstellung dynamischer Benutzeroberflächen, bei denen Benutzer in Echtzeit zwischen verschiedenen Studiengängen, Zeiträumen und Filteroptionen wechseln konnten, ohne die Seite neu laden zu müssen. Weiterhin begeisterte uns die Komponentenbasierte herangehensweise.

Zusätzlich nutzte ich **Bootstrap**, um ein responsives Layout zu gestalten, und **D3.js** für die Datenvisualisierung.

Da die Umsetzung des Projekts eine Zusammenarbeit erforderte, hatte ich das Glück, Unterstützung von einem jungen IT-Kollegen für das Backend und einem weiteren Kollegen für die Erstellung der SQL-Reports und Views zu bekommen. Diese ermöglichten den Zugriff auf die Daten über eine REST-Schnittstelle.

Ein wichtiger Bestandteil des Portals war die Möglichkeit, historische Daten (z. B. zum Vergleich von Semestern) bereitzustellen. Dafür entwickelten wir einen Datenstore, der die Stichtagszahlen vom 15. Mai und 15. November automatisch speicherte. Nutzer konnten vergangene Semester auswählen und Veränderungen in den Zahlen direkt nachvollziehen. Um Trends auf einen Blick zu erkennen, integrierte ich Sparklines mit D3.js, die zeitliche Entwicklungen für spezifische Zahlen visualisierten.

Das Portal wurde iterativ entwickelt und veröffentlicht. Schon die erste Version bot einen umfangreichen Funktionsumfang, der Stakeholder von der Nutzung überzeugte. Im Laufe der Zeit erweiterten wir das Portal kontinuierlich, um es noch leistungsfähiger und benutzerfreundlicher zu gestalten.

Meine Rolle umfasste nicht nur die initiale Idee, sondern auch die Umsetzung des gesamten Frontends mit hilfe meines IT-Kollegen, wenn ich mal nicht mehr weiter wusste. Für das Layout und die Dynamik nutzte ich Angular in Kombination mit Bootstrap. Die Datenvisualisierung wurde mithilfe von D3.js realisiert. Dank meiner Begeisterung für innovative Lösungen und kontinuierlicher Verbesserung sprudelten immer neue Ideen in das Projekt ein, die den Mehrwert des Portals stetig erhöhten.

## Lerneffekte

1. **Effektive Problemanalyse:** Durch die enge Beobachtung und Analyse der Prozesse konnte ich eine konkrete Lösung entwickeln, die die Bedürfnisse aller Beteiligten erfüllte.
2. **Kollaboration:** Die Zusammenarbeit mit Kollegen aus der IT und der Statistikabteilung hat gezeigt, wie wichtig interdisziplinäre Teams für komplexe Projekte sind.
3. **Einsatz moderner Technologien:** Durch die Verwendung von Angular konnte ich die Vorteile eines modernen Frameworks für dynamische und performante Benutzeroberflächen voll ausschöpfen.
4. **Iterative Entwicklung:** Die inkrementelle Veröffentlichung des Portals hat es ermöglicht, früh Feedback einzuholen und das Produkt kontinuierlich zu verbessern.
5. **Datenvisualisierung:** Die Kombination von Angular und D3.js hat mir wertvolle Einblicke in die Visualisierung komplexer Daten gegeben und meine Frontend-Kompetenzen erweitert.
6. **Selbstorganisation:** Von der Idee bis zur Umsetzung habe ich gelernt, wie wichtig es ist, eigenständig Lösungen vorzuschlagen und diese mit einem Team erfolgreich umzusetzen.
