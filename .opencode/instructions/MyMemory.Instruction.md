# My Memory Context

**Stand:** 2026-10-04 12:07

## Fortschritt

**Aktueller Stand laufender Aufgaben:**

- Die Lara-47-zentrierte Astro-One-Page ist unter `https://autor.krick.me` veröffentlicht.
- Die Erweiterung mit vollständiger Leseprobe, KU-Hinweis, cookie-freiem Kontaktformular und ausführlicheren Datenschutzhinweisen ist veröffentlicht und live geprüft.
- Das offizielle deutsche `Erhältlich bei Amazon`-Badge, der Ab-18-Hinweis der Leseprobe und der Band-2-Satz sind veröffentlicht und responsiv geprüft.

**Risiken:**

- Automatische Cloudflare-Builds aus GitHub sind noch nicht verbunden; aktuelle Deployments erfolgen mit Wrangler.
- Der Hinweis auf Kindle Unlimited muss bei der KDP-Select-Entscheidung Ende Oktober 2026 erneut geprüft werden.

**Offene Fragen:**

- Keine offenen Fragen zum aktuellen Release.

**Nächste Schritte:**

- [X] Build, Accessibility und responsive Darstellung prüfen.
- [X] GitHub einrichten, mit Cloudflare deployen und Live-Domain verifizieren.
- [X] Formularerweiterung mit Resend deployen und durch eine echte Testnachricht live prüfen.
- [ ] Kindle-Unlimited-Hinweis Ende Oktober 2026 bestätigen oder entfernen.
- [ ] Leserinnenstimmen nur ergänzen, wenn eine schriftliche Freigabe dokumentiert ist; der Punkt hat keine Eile.

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

### Leseprobe und öffentliche Buchangaben (2026-10-04)

**Entscheidung:** Kapitel 1 wird vollständig auf einer eigenen statischen Seite unter `/leseprobe/` veröffentlicht. Die Startseite verweist darauf, nennt die aktuelle Kindle-Unlimited-Verfügbarkeit, verwendet das unveränderte offizielle deutsche `Erhältlich bei Amazon`-Badge und bezeichnet Attila als `Autor · Songtexter`. Der Autorbereich erwähnt knapp, dass Band 2 vor dem ersten spielt und gerade entsteht.

**Begründung:** Eine eigene Seite bleibt direkt verlinkbar und hält die Verkaufsseite kompakt. KU ist ein belegter Kauf- beziehungsweise Lesehebel. Das von KDP freigegebene Badge macht den Amazon-Wechsel sichtbar, ohne ein nicht autorisiertes Kindle-Unlimited-Logo zu verwenden. Die Rollenbezeichnung ist durch die Projektdokumentation gedeckt. Der User hat die knappe Band-2-Erwähnung ohne Erscheinungstermin ausdrücklich freigegeben.

**Konsequenz:** `src/pages/leseprobe.md` enthält den unveränderten Kapiteltext; ein vorgeschalteter Hinweis nennt Altersfreigabe, Menschenhandel und Entwürdigung. Astros automatische typografische Umwandlung ist deaktiviert. Der KU-Hinweis braucht Ende Oktober eine erneute Prüfung. Leserinnenstimmen werden erst nach dokumentierter schriftlicher Freigabe verwendet.

**Verworfen:** Vollständiges Kapitel direkt in der One-Page, reiner Amazon-Leseprobenlink, ein nicht freigegebenes Kindle-Unlimited-Logo und eine ausführliche Band-2-Ankündigung mit unbelegtem Erscheinungstermin.

### Cookie-freies Kontaktformular (2026-10-04)

**Entscheidung:** Der zusätzliche Kontaktweg wird als eigenes Formular über einen Cloudflare-Worker-Endpunkt und die Resend-API umgesetzt. Das Formular setzt keine Cookies und nutzt kein extern eingebettetes Captcha. Resend versendet über die verifizierte Subdomain `mail.autor.krick.me` an `attila@krick.me`; der API-Schlüssel liegt ausschließlich als Cloudflare-Secret `RESEND_API_KEY` vor.

**Begründung:** Damit bleibt die Website datensparsam und bietet neben der E-Mail-Adresse einen direkten elektronischen Kontaktweg. Honeypot, serverseitige Validierung und Cloudflare Rate Limiting begrenzen Spam ohne Besuchertracking.

**Konsequenz:** Das Formular ist veröffentlicht. Eine echte Testnachricht wurde von der Live-Seite angenommen und von Resend als `Delivered` ausgewiesen. Google-Workspace-MX-Einträge für `krick.me` bleiben unverändert.

**Verworfen:** Telefonnummer, externes Formulardienst-Embedding und ein Cookie- oder Captcha-abhängiger Dienst. Cloudflare Email Service wurde verworfen, weil der direkte Versand einen kostenpflichtigen Workers-Tarif erfordert und Email Routing mit den bestehenden Google-Workspace-MX-Einträgen kollidieren könnte.

## Context

- **Projektzweck:** Öffentliche One-Page-Autorenseite für Lara 47, Attila Krick und die Musik zum Buch.
- **Leitdokumente:** `AGENTS.md`, `README.md`
- **Arbeitsmodus:** Lara47-Quellen prüfen, kleinste statische Lösung bauen, lokal testen, über GitHub und Cloudflare veröffentlichen.
- **Constraints:** Keine privaten Lara47-Dossiers übernehmen; keine Cookies, kein Tracking, keine Drittanbieter-Embeds.

## Referenzen

- **Dateien:** `src/pages/index.astro`, `src/pages/leseprobe.md`, `src/layouts/ReadingLayout.astro`, `worker/index.ts`, `wrangler.jsonc`, `AGENTS.md`

## Verlauf

| Erfasst am | Ereignisdatum | Ereignis / Änderung | Quelle | Status / Ergebnis |
| --- | --- | --- | --- | --- |
| 2026-10-04 00:00 | 2026-10-04 | Lara-zentrierte Seitenhierarchie, cookie-freie externe Medienlinks, Verzicht auf Tracking und autonomer Livegang festgelegt | User-Auskunft in aktueller Session | in Umsetzung |
| 2026-10-04 09:43 | 2026-10-04 | Astro-Seite gebaut, responsiv und technisch geprüft, nach GitHub gepusht und über Workers Static Assets mit Custom Domain veröffentlicht | Verifizierte Toolergebnisse und Live-Abruf | erledigt |
| 2026-10-04 10:50 | 2026-10-04 | Eigene Leseprobenseite, KU-Hinweis, Rollenbezeichnung `Autor · Songtexter`, erweiterter Datenschutz und cookie-freies Kontaktformular umgesetzt | User-Entscheidungen und verifizierte lokale Builds sowie Browserprüfung | lokal erledigt, E-Mail-Onboarding und Deployment offen |
| 2026-10-04 11:45 | 2026-10-04 | Resend-Versanddomain `mail.autor.krick.me` verifiziert, API-Schlüssel als Cloudflare-Secret hinterlegt, Erweiterung veröffentlicht und Kontaktformular produktiv getestet | Verifizierte Cloudflare-, Resend- und Browserergebnisse | Live-Seite bestätigt Versand; Resend meldet Testnachricht an `attila@krick.me` als `Delivered` |
| 2026-10-04 12:07 | 2026-10-04 | Offizielles deutsches Amazon-Badge eingebunden, Leseprobe mit Ab-18-Inhaltshinweis ergänzt, Band 2 knapp angekündigt und schriftliche Freigabe als Voraussetzung für Leserinnenstimmen festgelegt | User-Entscheidung, offizielle KDP-Assets sowie verifizierter Build und Live-Browserprüfung | veröffentlicht; Desktop und Mobilansicht geprüft |
