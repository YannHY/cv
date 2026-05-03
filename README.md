# CV

Ce dépôt contient un site CV : une page statique, responsive et bilingue, développée en HTML, CSS et JavaScript vanilla.

Le site présente un profil professionnel, un parcours, des compétences, des publications, des interventions et des moyens de contact, avec plusieurs interactions légères pour améliorer la consultation.

## Fonctionnalités principales

### Navigation

Le site dispose d'une barre de navigation fixe permettant d'accéder aux grandes sections de la page. Sur mobile, cette navigation devient un menu compact.

Les liens internes utilisent un défilement fluide, et la section active est mise en évidence pendant la consultation.

### Thème clair / sombre

Un bouton permet de basculer entre un thème clair et un thème sombre.

La préférence est sauvegardée dans le navigateur avec `localStorage`.

### Interface bilingue

Le site peut être consulté en français ou en anglais.

Les traductions sont gérées dans `i18n.js` et appliquées dynamiquement aux éléments utilisant les attributs `data-i18n` et `data-i18n-placeholder`.

### Cartes d'expertise et modales

Les domaines d'expertise sont affichés sous forme de cartes interactives.

Chaque carte ouvre une modale contenant une courte description et un lien externe pour approfondir.

Les modales peuvent être fermées au clic, avec l'overlay ou avec la touche `Escape`. Elles restaurent le focus et empêchent le défilement de la page lorsqu'elles sont ouvertes.

### Sections de contenu

La page est organisée en sections :

- accueil ;
- expertises ;
- profil ;
- parcours professionnel ;
- compétences et certifications ;
- conférences et médias ;
- publications ;
- contact.

Chaque section est conçue pour être lisible sur ordinateur, tablette et mobile.

### Animations

Certaines cartes et sections s'animent lorsqu'elles entrent dans la zone visible de l'écran.

Les statistiques du profil utilisent des compteurs animés déclenchés au défilement.

### Conférences extensibles

Une partie des interventions est masquée par défaut.

Un bouton permet d'afficher ou de masquer la liste complète, avec un texte adapté à la langue active.

### Formulaire de contact

Le formulaire contient les champs nom, email, objet et message.

Il est prévu pour fonctionner avec Netlify Forms grâce à l'attribut `netlify`.

### Liens externes

Le site contient des liens vers des ressources, publications, plateformes de livres, profils sociaux et sites associés.

## Structure du projet

```text
.
├── index.html
├── style.css
├── script.js
├── i18n.js
└── Images/
```

## Rôle des fichiers

### `index.html`

Structure de la page : sections, contenus, modales, formulaire, liens et chargement des scripts.

### `style.css`

Styles du site : couleurs, typographie, mise en page, responsive design, thème sombre, cartes, modales et animations.

### `script.js`

Interactions principales :

- changement de thème ;
- navigation mobile ;
- défilement fluide ;
- état actif de la navigation ;
- ouverture et fermeture des modales ;
- animation de la timeline ;
- affichage des conférences supplémentaires ;
- compteurs animés ;
- mise à jour automatique de l'année dans le footer.

### `i18n.js`

Système de traduction français / anglais et gestion de la langue active.

### `Images/`

Images utilisées par le site : photo, couvertures, favicon et visuels des publications.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript vanilla
- Ionicons
- Google Fonts
- Netlify Forms
- `localStorage`
- `IntersectionObserver`

## Lancer le site en local

Le site peut être ouvert directement depuis `index.html`.

Il peut aussi être servi localement avec :

```bash
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Modifier le site

- Modifier le contenu : `index.html`
- Modifier l'apparence : `style.css`
- Modifier les interactions : `script.js`
- Modifier les traductions : `i18n.js`
- Ajouter ou remplacer des images : `Images/`

## Déploiement

Le projet peut être déployé sur tout hébergement statique : GitHub Pages, Netlify ou équivalent.

Le formulaire de contact est déjà préparé pour Netlify Forms.
