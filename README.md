# Site vitrine MultiLaunch

Site vitrine responsive pour présenter MultiLaunch et fournir la commande complète d'installation.

## Fichiers

- `index.html` — page principale
- `style.css` — design responsive
- `script.js` — copie de commande + galerie
- `assets/` — captures d'écran du projet

## Installation / publication

Le site est statique : aucun serveur ni dépendance npm n'est nécessaire.

Pour GitHub Pages, placez les fichiers dans un dépôt puis activez Pages sur la branche contenant `index.html`.

## Commande d'installation MultiLaunch

```bash
git clone https://github.com/LukeCOULON/multilaunch-install.git && cd multilaunch-install && python3 install.py
```

La page présente la version 0.0.6, Windows/Linux, la détection non destructive documentée dans le scanner, la configuration Wine/Proton, le diagnostic et l'installation.


## Téléchargement Windows

Le site propose un bouton de téléchargement vers `downloads/MultiLaunch-Windows.zip`.
Ce ZIP doit contenir :
- `MultiLaunch-Setup.exe`
- `windows/multilaunch.exe`

Les exécutables ne sont pas inclus dans cette archive source car ils n'étaient pas présents dans les fichiers fournis. Placez les vrais exécutables aux emplacements indiqués puis générez `downloads/MultiLaunch-Windows.zip` avec le script de publication fourni dans `build-windows-zip.ps1`.
