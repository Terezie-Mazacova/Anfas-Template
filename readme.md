foundation-boilerplate
==========

|   |   |
| :-- | :-- |
| Klient             | Klient |
| Projekt            | Projekt |

### URL

|   |   |   |
| :-- | :-- | :-- |
| Public   | --- | --- |
| Staging  | --- | --- |
| Naseweby | --- | --- |

## Inicializace projektu

V souborech nahradit řetězce `client-name` a `<%= domain %>` relevantními hodnotami.
Vytvořit soubory `Runtime.config` a `Web.config` ze šablon `Runtime_local.config` a `Web_local.config`.
Nainstalovat npm moduly příkazem `npm install`.
Promazat javascriptové soubory ve složkách src/js a assets/js, které na webu nebudou potřeba.

## Deploy

Aktualizovat verze .css a .js souborů přidáním aktuálního data za název (př. main.min.css?20161220).
Nastavit složku na ftp v `config.js`.
Deploy provést příkazem `gulp deploy` - minifikuje a nahraje soubory na ftp.

## Technická dokumentace

Při vývoji byly využity tyto technologie a nástroje:
 - mobile first
 - css bem
 - [Foundation framework](http://foundation.zurb.com/)
 - pojmenování barev ve _variables.scss pomocí [online nástroje](http://chir.ag/projects/name-that-color/)
