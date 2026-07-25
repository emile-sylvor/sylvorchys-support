# 🌸 Sylvorchys Support Center

**Centre d'assistance premium pour orchidées exceptionnelles**

Un centre d'assistance moderne et minimaliste pour l'entreprise horticole Sylvorchys, inspiré par la qualité exceptionnelle d'Apple Support, avec une identité visuelle originale et élégante.

## ✨ Caractéristiques

### Design Premium
- ✅ **Ultra-moderne** - Design minimaliste et élégant
- ✅ **Glassmorphism** - Effets vitrés sophistiqués
- ✅ **Animations fluides** - Transitions douces et naturelles
- ✅ **Mode sombre automatique** - Adaptative au système (prefers-color-scheme)
- ✅ **Responsive parfait** - Optimisé pour desktop, tablette et mobile
- ✅ **Coins arrondis** - Esthétique moderne avec border-radius généreuses
- ✅ **Ombres douces** - Profondeur subtile et élégante

### Palette de Couleurs
- **Vert forêt** (#1a5f3f) - Couleur primaire
- **Vert mousse** (#2d8659) - Couleur secondaire
- **Vert clair** (#4a9b6f) - Accent
- **Blanc/Gris clair** - Arrière-plans
- **Mode sombre natif** - Adaptation complète

### Fonctionnalités Principales

#### 🔍 Recherche Instantanée
- Filtrage en temps réel sur les titres, réponses et catégories
- Affichage du nombre de résultats trouvés
- Debouncing pour optimiser les performances
- Sans rechargement de page

#### 📂 Catégories
- 6 catégories principales avec icônes emoji
- 14 sous-catégories dans la FAQ
- Cartes avec effet au survol (translateY, shadow, border)
- Comptage automatique des questions par catégorie

#### ❓ FAQ Dynamique
- **55+ questions** réalistes et détaillées
- Accordéon avec une seule question ouverte à la fois
- Réponses générées automatiquement depuis un tableau JavaScript
- Animation d'ouverture fluide
- Filtrage par catégorie

#### ⭐ Accès Rapide
- Questions populaires (triées par longueur de réponse)
- Questions récentes (derniers ajouts)
- Liens directs pour ouvrir et scroller vers les questions

#### 📞 Contact
- Bouton "Nous contacter" avec mailto
- Email: contact@sylvorchys.com
- Accès direct depuis la navigation et la section contact

### Accessibilité (WCAG)
- ✅ Navigation au clavier complète (Tab, Enter, Espace)
- ✅ ARIA labels et roles appropriés
- ✅ aria-expanded pour les accordéons
- ✅ aria-live pour les mises à jour dynamiques
- ✅ Focus visible avec outline
- ✅ Contraste élevé respectant les normes
- ✅ Support du mode réduit motion (prefers-reduced-motion)

### Optimisation & Performance
- ✅ **Vanilla JavaScript** - Zéro dépendance
- ✅ **HTML5 sémantique** - Structure propre et accessible
- ✅ **CSS3 moderne** - Variables CSS, Grid, Flexbox
- ✅ **Pas de CDN** - Tout local
- ✅ **Pas de build** - Fonctionne directement en ouvrant index.html
- ✅ **Rapide** - Pas de dépendances externes

## 📁 Structure du Projet

```
sylvorchys-support/
├── index.html      # Structure HTML sémantique
├── style.css       # Design premium avec animations
├── script.js       # Système FAQ dynamique avec recherche
└── README.md       # Documentation (ce fichier)
```

## 🚀 Démarrage Rapide

### Installation
1. Clonez le dépôt:
```bash
git clone https://github.com/emile-sylvor/sylvorchys-support.git
cd sylvorchys-support
```

2. Ouvrez directement dans votre navigateur:
```bash
open index.html
# ou simplement double-cliquez sur index.html
```

### Prérequis
- ✅ Aucun - Aucune dépendance, aucun build
- ✅ Fonctionne avec n'importe quel navigateur moderne

## 🎨 Customization

### Ajouter de Nouvelles Questions
Modifiez le tableau `faqDatabase` dans `script.js`:

```javascript
const faqDatabase = [
    {
        id: 56,
        category: 'Votre Catégorie',
        question: 'Votre question ?',
        answer: 'Votre réponse détaillée...'
    },
    // ...
];
```

### Modifier les Couleurs
Ajustez les variables CSS dans `style.css`:

```css
:root {
    --color-primary: #1a5f3f;      /* Vert forêt */
    --color-secondary: #2d8659;    /* Vert mousse */
    --color-accent: #4a9b6f;       /* Vert clair */
    /* ... autres variables */
}
```

### Modifier les Catégories
Mettez à jour le tableau `categories` dans `script.js`:

```javascript
const categories = [
    { icon: '🌸', name: 'Orchidées', key: 'Orchidées' },
    // ...
];
```

## 📊 Contenu de la FAQ

La FAQ couvre 14 catégories:

1. **Phalaenopsis** (5 questions) - Orchidées papillon
2. **Paphiopedilum** (5 questions) - Orchidées sabot
3. **Arrosage** (5 questions) - Techniques d'arrosage
4. **Rempotage** (5 questions) - Rempotage et substrat
5. **Engrais** (4 questions) - Fertilisation
6. **Température** (3 questions) - Conditions thermiques
7. **Éclairage** (3 questions) - Besoins en lumière
8. **Livraison** (4 questions) - Expédition et transport
9. **Commandes** (3 questions) - Processus de commande
10. **Paiement** (3 questions) - Options de paiement
11. **Garantie** (3 questions) - Politique de garantie
12. **Sylvorchys** (4 questions) - À propos de l'entreprise
13. **Hybrides** (5 questions) - Orchidées hybrides
14. **Orchidées** (4 questions) - Questions générales

**Total: 55+ questions réalistes et détaillées**

## 🎯 Fonctionnalités JavaScript Avancées

### Système de Recherche Intelligent
```javascript
// Recherche sur:
- Titres des questions
- Contenu des réponses
- Catégories

// Debouncing pour performance optimale (300ms)
// Affichage du nombre de résultats
```

### Gestion des Accordéons
```javascript
// Une seule question ouverte à la fois
// Fermeture automatique des autres
// Animation d'ouverture fluide (max-height transition)
// aria-expanded pour accessibilité
```

### Navigation au Clavier
```javascript
// Tab - Navigation entre éléments
// Enter / Espace - Ouvrir/fermer accordéon
// Ctrl + / - Focus sur la recherche
```

## 📱 Responsive Design

### Breakpoints
- **1024px** - Ajustements layout
- **768px** - Tablet (stack vertical, nav réduit)
- **480px** - Mobile (optimisé avec font-sizes réduits)

### Features Responsive
- Grille flexible (auto-fit, minmax)
- Typography fluide
- Padding/spacing adaptatifs
- Navigation mobile optimisée

## 🌙 Mode Sombre

Le site détecte automatiquement la préférence système:
```css
@media (prefers-color-scheme: dark) {
    /* Couleurs adaptées pour le mode sombre */
}
```

## ♿ Accessibilité

### WCAG 2.1 Level AA
- ✅ Hiérarchie sémantique correcte (h1, h2, h3, etc.)
- ✅ Tous les éléments interactifs accessibles au clavier
- ✅ Focus visible avec outline
- ✅ Ratios de contraste conformes
- ✅ ARIA labels descriptifs
- ✅ Regions et landmarks (main, nav, footer, etc.)
- ✅ Support du lecteur d'écran

### Améliorations d'Accessibilité
```html
<!-- aria-labels descriptifs -->
<input aria-label="Rechercher dans le centre d'assistance">

<!-- Accordéons accessibles -->
<button aria-expanded="false" aria-controls="answer-1">

<!-- Régions live -->
<div role="status" aria-live="polite"></div>
```

## 🎬 Animations

### Animations Principales
- **fadeIn** - Apparition progressive
- **fadeInDown** - Arrivée du haut
- **slideUp** - Apparition depuis le bas
- **float** - Logo flottant

### Transitions CSS
- Hover sur cartes (translateY, shadow)
- Ouverture accordéon (max-height)
- Changement de couleur de lien
- Focus visible

### Réduction Motion
```css
@media (prefers-reduced-motion: reduce) {
    /* Animations désactivées pour accessibilité */
}
```

## 📊 Performance

- **Aucune dépendance JavaScript** - Vanilla JS uniquement
- **CSS optimisé** - Variables CSS pour maintenance facile
- **HTML sémantique** - Structure légère et valide
- **Pas de CDN** - Tout en local
- **Debouncing** - Optimisation de la recherche
- **Lazy rendering** - Faqitems rendus à la demande

## 🔍 Seo

- ✅ Meta descriptions
- ✅ Structured HTML
- ✅ Open Graph ready
- ✅ Mobile-first design
- ✅ Semantic HTML5

## 🛠️ Maintenance

### Ajouter une Catégorie
1. Ajouter dans `uniqueCategories` dans script.js
2. Les boutons de filtre se génèrent automatiquement

### Ajouter une Question
1. Ajouter un objet dans `faqDatabase`
2. Incrémenter l'ID
3. Utiliser une catégorie existante

### Personnaliser le Design
Tous les paramètres sont dans les variables CSS:
```css
:root {
    --color-primary: /* votre couleur */
    --font-size-lg: /* votre taille */
    --spacing-lg: /* votre espacement */
    /* ... */
}
```

## 📝 Licence

Copyright © 2025 Sylvorchys. Tous droits réservés.

## 👨‍💻 Auteur

Développé par une équipe front-end senior spécialisée en UX/UI haut de gamme pour Sylvorchys.

## 🤝 Support

Pour toute question: **contact@sylvorchys.com**

---

## 📋 Checklist de Fonctionnalités

- ✅ HTML5 sémantique avec accessibilité
- ✅ CSS3 moderne avec variables et animations
- ✅ JavaScript Vanilla (pas de framework)
- ✅ Recherche instantanée
- ✅ 55+ questions FAQ
- ✅ 14 catégories de questions
- ✅ Accordéon dynamique
- ✅ Questions populaires et récentes
- ✅ Mode sombre automatique
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Animations fluides
- ✅ Accessibilité WCAG AA
- ✅ Navigation au clavier
- ✅ Performance optimale
- ✅ Zéro dépendance
- ✅ Prêt pour production

---

**Bienvenue chez Sylvorchys - Centre d'Assistance Premium 🌸**
