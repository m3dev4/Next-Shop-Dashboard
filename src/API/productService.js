const STORAGE_KEY = "products";

/**
 * Récupérer les produits depuis localStorage
 * si vide → retourne un tableau vide ou des données initiales
 */
export const getProducts = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Sauvegarder tous les produits dans localStorage
 */
export const saveProducts = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

/**
 * Ajouter un produit
 */
export const addProduct = (newProduct) => {
  const products = getProducts();

  const productWithId = {
    ...newProduct,
    id: Date.now(), // id unique simple
  };

  const updatedProducts = [...products, productWithId];

  saveProducts(updatedProducts);

  return productWithId;
};

/**
 * Modifier un produit
 */
export const updateProduct = (id, updatedData) => {
  const products = getProducts();

  const updatedProducts = products.map((product) =>
    product.id === id ? { ...product, ...updatedData } : product
  );

  saveProducts(updatedProducts);

  return updatedProducts;
};

/**
 * Supprimer un produit
 */
export const deleteProduct = (id) => {
  const products = getProducts();

  const filteredProducts = products.filter(
    (product) => product.id !== id
  );

  saveProducts(filteredProducts);
  

  return filteredProducts;
};