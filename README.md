# knr-meil-github.io

Repozytorium zawierające stronę Koła Naukowego Robotyków

## Budowanie i edycja

Strona jest budowana za pomocą statycznego generatora [Hugo](https://gohugo.io/)

Do wygodnej edycji strony lokalnie należy [zainstalować hugo](https://gohugo.io/installation/) (Np na linuxie `sudo apt install hugo`)

Komenda `hugo server` usuchomi dynamiczny serwer z zawartością.

Do samodzielnego zbudowania samych plików wystarczy komenda `hugo`, która zbuduje witrynę w folderze `public`.

### Zawartość projektu

```tree
config.toml
content
└── project  //Tutaj znajdują się wszystkie strony poszczególnych projektów jak selfie, hal, melson
             // jak chcesz dodać nowy projekt to tutaj
data
layouts  // templatki z których budowane są różne typy stron
├── CNAME
├── _default
├── index.html //strona domowa
├── partials // folder z częściowymi templatkami (jak np stopka, czy nagłówek strony)
└── project // definicja wyglądu strony projektu
README.md
static //pliki statyczne, fonty, obrazki etc
├── css
├── fonts
├── images
└── js
```
