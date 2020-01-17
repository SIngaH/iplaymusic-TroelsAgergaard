# Del 2 - API og Data implementering

Anden del af projektet handler om få præsenteret rigtigt indhold i applikationen.

![alt text](https://github.com/rts-cmk-wuhf02/iplaymusic-TroelsAgergaard/blob/master/SpotifyAPI.png "Spotify API")

Alt data i iPlayMusic skal komme fra musik tjenesten Spotify. Spotify har et "entry point" for udviklere som du finder på: https://developer.spotify.com/ Herfra har du adgang til Spotify Web API som retunerer JSON metadata. Benyt ```fetch``` til at hente data om albums, categorier, numre etc. fra Spotify data katalog.

Det kræver en registerert Spotify bruger at få adgang til Web API'et.
**Du kan oprette en gratis konto her:**

https://www.spotify.com/dk/signup/


## Særlige krav til udvalgte views

**Featured:**

```Intersection Observer API'et``` til integration af ```Lazy-loading``` af billeder og indhold i takt med at det scrolles ned i viewet.

**Playlist**

Titler på numre må ikke ombryde i to linier. Afkort eventuelle lange titler med ... 


**Du skal bruge følgende i løsningen:**
fetch-wrapper (Jeres eget ```npm``` modul)

**Ekstra opgave** (free acount access?)
Udvikle søgefunktionalitet med resultatvisning i viewet "songs".

## Husk den gode arbejdsgang
1. Stage løbende
2. Commit hver gang en ændring virker
3. Push dagligt

