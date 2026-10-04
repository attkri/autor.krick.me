# AGENTS

## Projektziel

- Dieses Repository enthält die öffentliche One-Page-Autorenseite für `Lara 47` unter `https://autor.krick.me`.
- Die Seite stellt zuerst das Buch vor. Autor, Musik und Trailer unterstützen den Buchkauf.
- Primäre Handlung ist der Wechsel zur Amazon-Produktseite.

## Technik

- Astro als statische Website ohne Frontend-Framework.
- Cloudflare Workers Static Assets als Hostingziel.
- GitHub ist die Versionsquelle; `main` ist der Produktionsbranch.
- Keine Cookies, kein Tracking, keine Analyse und keine automatisch geladenen Drittanbieter-Inhalte.
- Externe Medien werden nur verlinkt, nicht eingebettet.

## Quellen

- Öffentliche Buch-, Autor- und Musikfakten stammen aus `C:/Users/attila/Projects/Lara47`.
- Maßgebliche Marketingregeln stehen dort in `.opencode/agents/Lara-Marketing.md`.
- Private Kontaktdateien, Direktnachrichten, Blockerlisten und unfreigegebene Rezensionen dürfen nicht übernommen werden.
- Assets aus dem Lara47-Repository werden in dieses Repository kopiert und hier produktionsgerecht optimiert.

## Gestaltung

- Bestehende Markenwelt beibehalten: Gold `#B89156`, Schwarz `#0B0A08`, Cormorant Garamond.
- Die Zahl `47` ist Lotnummer und visuelles Ordnungselement, kein Symbol oder militärischer Codename.
- Keine Romantisierung von Menschenhandel, Zwang oder Konditionierung.
- Lara nicht als passive Opferfläche und Mateo nicht als einfachen Retter darstellen.
- Keine generische Dark-Romance-, BookTok- oder KI-Landingpage-Ästhetik.

## Qualität

- Mobile-first, semantisches HTML, sichtbare Fokuszustände und mindestens 44 Pixel große Touch-Ziele.
- Animationen nur sparsam und mit `prefers-reduced-motion`.
- Bilder mit passenden Abmessungen, Formaten, Alternativtexten und ohne unnötige Layout-Verschiebung ausliefern.
- Vor Veröffentlichung mindestens `npm run check` und `npm run build` ausführen.
- Externe Links, Metadaten, strukturierte Daten und die Live-Domain nach dem Deployment prüfen.
