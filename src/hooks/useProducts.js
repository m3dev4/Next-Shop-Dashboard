//gérer le state
//Le state est accessible à plusieurs composants (via useProducts)

//C’est un “Global state localisé dans un custom hook”

//ou plus simplement : un state partagé via un hook réutilisable

//L’utilité d’un custom hook, c’est de sortir la logique des composants pour la réutiliser proprement.
//Si tu ne l'utilise pas, tu mets toute la logique dans les composants

//Résultat :
//composants trop longs
//logique répétée
//code difficile à lire

//Il évite que :
// - les composants deviennent trop chargés
// - la logique soit dupliquée
// - les composants touchent directement le service( Le composant : ne connaît pas le service, ne connaît pas localStorage, ne fait que afficher et déclencher des actions)

//différence entre custom hook et state global.
// le hook contient la logique de gestion des produits (state, chargement des données, ajout, modification, suppression).
//Cependant, il ne faut pas appeler useProducts() dans chaque composant ou chaque page qui veut utiliser les produits.
// car React va créer deux instances différentes du hook. Cela signifie que chaque composant aura son propre state. La page d’ajout modifiera son propre état et non celui utilisé par App.jsx
//L’architecture correcte consiste à placer le custom hook dans un composant parent qui possède la donnée, généralement App.jsx. Ce composant devient le propriétaire du state.



import { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  saveProducts,
} from "../API/productService";
import { mockProducts } from "../mock/produits";

export default function useProducts() {
  // 1. STATE central
  const [products, setProducts] = useState([]);

  // 2. CHARGEMENT INITIAL (API → state)
  useEffect(() => {
    const data = getProducts();

    if (!data || data.length === 0) {
      // localStorage vide → on injecte les mocks
      saveProducts(mockProducts);
      setProducts(mockProducts);
    } else {
      // localStorage déjà rempli
      setProducts(data);
    }
  }, []);

  // 3. AJOUT PRODUIT
  const handleAddProduct = (product) => {
    const newProduct = addProduct(product);
    setProducts((prev) => [...prev, newProduct]);
  };

  // 4. SUPPRIMER PRODUIT
  const handleDeleteProduct = (id) => {
    const filteredProducts=deleteProduct(id);
    setProducts(filteredProducts);
  };

  // 5. MODIFIER PRODUIT
  const handleUpdateProduct = (id, updatedData) => {
    const updatedList = updateProduct(id, updatedData);
    setProducts(updatedList);
  };

  // 6. EXPOSITION (API du hook)
  return {
    products,
    addProduct: handleAddProduct,
    deleteProduct: handleDeleteProduct,
    updateProduct: handleUpdateProduct,
  };
}
