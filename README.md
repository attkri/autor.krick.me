# autor.krick.me

## Überblick

Astro-Website für den Dark-Romance-Roman "Lara 47 - Zwischen Kontrolle und Hingabe" von Attila Krick. Die Startseite stellt Buch, Autor, Musik und Trailer vor und führt zur Amazon-Produktseite. Unter `/leseprobe/` steht das vollständige erste Kapitel. Die Website läuft ohne Cookies, Tracking oder automatisch geladene Inhalte von Drittanbietern. Das Produktionsziel ist Cloudflare Workers Static Assets unter `https://autor.krick.me`.

## Voraussetzungen

- Node.js 24 oder neuer
- npm 11 oder neuer
- Cloudflare-Zugriff für Deployments
- Bei Cloudflare als Secret hinterlegter Resend-Schlüssel `RESEND_API_KEY`
- Bei Resend verifizierte Versanddomain `mail.autor.krick.me`

## Entwicklung

```sh
npm install
npm run dev
```

## Prüfung

```sh
npm run check
npm run build
```

## Deployment

Das Kontaktformular sendet serverseitig aus dem Worker über Resend. Der API-Key wird ausschließlich als Cloudflare-Secret gespeichert und gehört nicht in lokale Dateien oder Git.

```sh
npm run deploy
```
