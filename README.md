# Laboration 1 – Automatisering & Publicering

## Projektbeskrivning
Webbplatsen består av tre undersidor:

1. **Startsida** – innehåller huvudmeny, rubrik, introduktion och lista över webbplatsens syfte.  
2. **Bildersida** – visar fem bilder i ett responsivt galleri.  
3. **Arbetsprocess** – beskriver steg-för-steg hur webbplatsen byggts och vilka verktyg som används.  


## Branch-arbetssätt
Utveckling sker i `development`-branchen.  
När webbplatsen är färdig mergas ändringarna till `main`, som används för publicering via GitHub Pages.

Webbplatsen använder HTML, CSS och JavaScript och är responsiv.

## Automatisering
Projektet använder **NodeJS** och **Vite** för att automatisera följande saker:

- Minifiering av CSS-filer  
- Minifiering av JavaScript-filer  
- Optimering av bilder till moderna format (WebP/AVIF)  
- Kopiering av arbetsfiler från src/ till publiceringsmappen docs/

För att bygga webbplatsen från arbetsfiler:

1. Körde jag npm install för att installera alla beroenden  
2. Körde jag npm run build för att skapa produktion i docs/

## Filstruktur
- src/ – arbetsfiler (HTML, CSS, JS, bilder)  
- docs/ – publiceringsfiler som GitHub Pages använder  
- Innehåller alla HTML-sidor, minifierad CSS och JS (assets/) samt optimerade bilder (bilder-optimized/)  

## Publicerad webbplats
Webbplatsen publiceras automatiskt via **GitHub Pages**.  
[Se den publicerade webbplatsen](https://aliatwood.github.io/Automatisering-publicering)
