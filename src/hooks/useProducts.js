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



import { useEffect, useState } from "react";
import {mockProducts} from '../mock/produits'
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../API/productService";

export default function useProducts() {

  // 1. STATE central
  const [products, setProducts] = useState([]);

  // 2. CHARGEMENT INITIAL (API → state)
  useEffect(() => {
    const data = getProducts();
    if (!data || data.length === 0) {
      // localStorage vide → on injecte les mocks
      addProduct(mockProducts);
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
    deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
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