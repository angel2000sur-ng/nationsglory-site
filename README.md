# Nations — site communautaire Minecraft

Site statique en français pour un serveur Minecraft NationsGlory, avec les pages Accueil, Notations et Wiki. Pas d'installation, de serveur ni de clé API nécessaires.

## Prévisualiser

Ouvre `index.html` dans un navigateur. Tous les fichiers du site sont à la racine. La police Google Fonts se charge en ligne, avec une police système en secours.

## Publier sur GitHub Pages

1. Crée un dépôt GitHub et ajoute ces fichiers à sa racine.
2. Dans **Settings → Pages**, choisis **Deploy from a branch**.
3. Sélectionne la branche `main`, le dossier `/ (root)`, puis enregistre.

Les pages sont gérées par des ancres (`#accueil`, `#notations`, `#wiki`), donc aucune configuration de routage n'est nécessaire.

## Personnaliser

- **Nom du serveur :** remplace `NATIONS.` et les textes d'exemple dans `index.html`.
- **Notations :** édite les tableaux `ratings` au début de `script.js`. Les données affichées sont des exemples de démonstration inspirés de la capture, pas des scores en direct.
- **Wiki :** modifie les six articles dans `index.html`. Les catégories et la recherche sont déjà fonctionnelles.
- **Discord :** remplace `https://discord.com/` par le lien d'invitation de ta communauté.
- **Adresse Minecraft :** ajoute l'IP de ton serveur dans le bloc de statut de la page d'accueil.

Le projet n'est pas affilié au site officiel NationsGlory. Le globe décoratif est dessiné en CSS et les drapeaux sont des emojis.
