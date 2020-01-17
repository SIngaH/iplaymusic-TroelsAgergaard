# Del 2 - API og Data implementering

Anden del af projektet handler om få præsenteret rigtigt indhold i applikationen.

![alt text](https://github.com/rts-cmk-wuhf02/iplaymusic-TroelsAgergaard/blob/master/SpotifyAPI.png "Spotify API")

Alt data i iPlayMusic skal komme fra musik tjenesten Spotify. Spotify har et "entry point" for udviklere som du finder på: https://developer.spotify.com/ Herfra kan du finde de nødvendige ```endpoint``` referencer. Spotify Web API endpoints retunerer data i JSON format. Benyt ```fetch``` til at hente data om albums, categorier, numre etc. fra Spotify data katalog.

Det kræver en registerert Spotify bruger at få adgang til Web API'et.

**Opret en gratis konto:** https://www.spotify.com/dk/signup/

---

## Særlige krav til udvalgte views

**Featured:**

```Intersection Observer API'et``` til integration af ```Lazy-loading``` af billeder og indhold i takt med at det scrolles ned i viewet.

**Playlist:**

Titler på numre må ikke ombryde i to linier. Benyt ```text overflow``` eller ingende til at afkorte eventuelle lange titler med ex. ... (tre punktummer) for at indikere at titlen ikke vises i sin fulde længde.

## Ekstra opgave
**Søgefunktionalitet:**

forespørg data fra search endpointet vedrørende artister, alubms, numre eller playlists som matcher en ```keyword string```. Præsenter resultaterne på en smart overskugelig måde i viewet "songs". Læs de guidelines som er beskrevet i afsnittet *"Writing a Query - guidelines"*

## Du skal bruge følgende i løsningen:

fetch-wrapper (Jeres eget ```npm``` modul)

## Husk den gode arbejdsgang
1. Stage løbende
2. Commit hver gang en ændring virker
3. Push dagligt

---

## Tidsramme
Der er afsat 1 arbejds uge til opgaven, dvs aflevering på fredag kl 13.30 (den sidste commit til github inden fredag kl 13.30, bliver afleveringen).
