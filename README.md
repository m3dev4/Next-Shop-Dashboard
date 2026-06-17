# Next-Shop Dashboard

## 1. Présentation du projet
**Next-Shop Dashboard** est une application web d'administration (back-office) conçue pour gérer l'inventaire d'une boutique en ligne. Elle offre une interface moderne et réactive permettant de visualiser en un coup d'œil les indicateurs clés de performance (KPIs) tels que le nombre total de produits, le volume de stock disponible et la valeur financière du stock. De plus, elle propose des graphiques analytiques dynamiques et un tableau complet pour effectuer les opérations CRUD (Création, Lecture, Modification, Suppression) sur le catalogue de produits de manière simple et intuitive.

## 2. Installation et Lancement
Pour installer et lancer le projet localement, ouvrez votre terminal et exécutez exactement les commandes suivantes :

```bash
# 1. Cloner le dépôt (remplacez l'URL par la vôtre si nécessaire)
git clone https://github.com/votre-nom/Next-Shop-Dashboard.git

# 2. Naviguer dans le dossier du projet
cd "Next-Shop Dashboard"

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement local
npm run dev
```
Le projet sera alors accessible dans votre navigateur (généralement à l'adresse `http://localhost:5173/`).

## 3. Architecture et Découpage
L'application est découpée en composants React modulaires pour faciliter la maintenance et la réutilisabilité. Voici la structure hiérarchique principale :

* **Composant Parent (Racine)**
  * `App.jsx` : Le composant conteneur principal de la page d'accueil. Il orchestre le tableau de bord, calcule les totaux (KPIs) et agence la disposition générale.

* **Composants Enfants (intégrés dans le Dashboard)**
  * `Sidebar` (`sidebar.jsx`) : Le menu de navigation latéral gauche.
  * `Header` (`header.jsx`) : La barre de recherche supérieure, avec les notifications et le profil administrateur.
  * `InventoryChart` (`InventoryChart.jsx`) : Le graphique en courbe représentant le volume de stock pour chaque produit.
  * `CategoryDoughnut` (`doghnuts.jsx`) : Le graphique circulaire représentant la répartition des stocks selon les différentes catégories.
  * `ListProducts` (`ListProducts.jsx`) : Le tableau affichant la liste des produits avec les actions possibles.
    * `EditProductModal` (`EditProductModal.jsx`) : Modale enfant utilisée dans la liste pour modifier un produit existant.

* **Composants Vues (Routage)**
  * `CreerProduit` (`creer-produit.jsx`) : Composant gérant la page et le formulaire complet pour ajouter un nouveau produit.
  * `Detail` (`detail.jsx`) : Composant gérant la page affichant les informations détaillées d'un seul produit.

## 4. Gestion de la Donnée (Le State)
La gestion de l'état global des produits est centralisée et gérée par un **Custom Hook** appelé `useProducts`.

- **Logique et Persistance** : Ce hook expose l'état `products` ainsi que les fonctions pour le manipuler (`addProduct`, `updateProduct`, `deleteProduct`). Il s'appuie sur le service `API/productService.js` qui se charge de sauvegarder et de lire les données (probablement dans le **LocalStorage** du navigateur), assurant que les modifications persistent après un rafraîchissement de la page.
- **Flux de données (Top-Down)** : Le composant parent `App.jsx` initialise l'état en appelant `useProducts()`. Il calcule ensuite les données dérivées (comme `totalStock` et `totalValue`) et passe l'état `products` sous forme de **props** à ses composants enfants (`InventoryChart`, `CategoryDoughnut`, `ListProducts`), ce qui garantit une interface toujours synchronisée avec les données.
