# My Memory Context

**Stand:** 2026-10-04 00:00

## Fortschritt

**Aktueller Stand laufender Aufgaben:**

- Die Astro-One-Page für `autor.krick.me` wird als Lara-47-zentrierte statische Website umgesetzt.

**Risiken:**

- Cloudflare-Anmeldung und Domainzuordnung müssen beim ersten Deployment interaktiv bestätigt werden, falls keine aktive lokale Sitzung vorhanden ist.

**Offene Fragen:**

- [ ] Keine inhaltlichen Grundsatzfragen offen.

**Nächste Schritte:**

- [ ] Build, Accessibility und responsive Darstellung prüfen.
- [ ] GitHub und Cloudflare verbinden, deployen und Live-Domain verifizieren.

## Entscheidungen

### Hosting und Datenschutz (2026-10-04)

**Entscheidung:** Die statische Astro-Seite wird über Cloudflare Workers Static Assets unter `autor.krick.me` veröffentlicht. Sie verwendet keine Cookies, kein Tracking und keine automatisch geladenen Drittanbieter-Inhalte.

**Begründung:** Der Aufbau bleibt wartungsarm, schnell und datensparsam. Cloudflare verwaltet bereits die DNS-Zone `krick.me`, während GitHub die Versionsquelle und Grundlage für spätere automatische Deployments bildet.

**Konsequenz:** Spotify, YouTube, Instagram und Amazon werden ausschließlich extern verlinkt. Ein Cookiebanner ist für die umgesetzten Funktionen nicht erforderlich.

**Verworfen:** GitHub Pages wurde wegen fehlender nativer Preview-Deployments und der unnötigen Trennung zwischen Hosting und DNS nicht gewählt. Direkte Medien-Embeds wurden wegen zusätzlicher Drittanbieter-Verbindungen verworfen.

### Inhaltlicher Schwerpunkt (2026-10-04)

**Entscheidung:** Lara 47 steht im Mittelpunkt. Autor, Musik und Trailer unterstützen den Kauf des Buches.

**Begründung:** Die primäre Handlung ist der Wechsel zur Amazon-Produktseite. Diese Hierarchie entspricht der bestehenden Lara47-Marketingstrategie und wurde vom User ausdrücklich bestätigt.

**Konsequenz:** Die Seite beginnt mit Buch und Konflikt, danach folgen Musik, Autor und Impressum.

**Verworfen:** Eine allgemeine Autorenseite mit Lara 47 als einem von mehreren Werken.

## Context

- **Projektzweck:** Öffentliche One-Page-Autorenseite für Lara 47, Attila Krick und die Musik zum Buch.
- **Leitdokumente:** `AGENTS.md`, `README.md`
- **Arbeitsmodus:** Lara47-Quellen prüfen, kleinste statische Lösung bauen, lokal testen, über GitHub und Cloudflare veröffentlichen.
- **Constraints:** Keine privaten Lara47-Dossiers übernehmen; keine Cookies, kein Tracking, keine Drittanbieter-Embeds.

## Referenzen

- **Dateien:** `src/pages/index.astro`, `AGENTS.md`

## Verlauf

| Erfasst am | Ereignisdatum | Ereignis / Änderung | Quelle | Status / Ergebnis |
| --- | --- | --- | --- | --- |
| 2026-10-04 00:00 | 2026-10-04 | Lara-zentrierte Seitenhierarchie, cookie-freie externe Medienlinks, Verzicht auf Tracking und autonomer Livegang festgelegt | User-Auskunft in aktueller Session | in Umsetzung |
