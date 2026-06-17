function EditProductModal({ selectedProduct, setSelectedProduct, updateProduct}) {
  return (
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">

            <h3 className="font-bold text-lg">Modifier produit</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateProduct(selectedProduct.id, selectedProduct);
                document.getElementById("my_modal_1").close();
              }}
              className="flex flex-col gap-3 mt-4"
            >

              <input
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                value={selectedProduct?.name || ""}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
                placeholder="Nom"
              />

              <input
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                value={selectedProduct?.price || ""}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    price: e.target.value,
                  })
                }
                placeholder="Prix"
              />

              <input
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                value={selectedProduct?.stock || ""}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    stock: e.target.value,
                  })
                }
                placeholder="Stock"
              />

                <select
                name="category"
                value={selectedProduct?.category}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    category: e.target.value,
                  })
                }
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                ">
                <option>
                Chaussures
                </option>

                <option>
                Téléphone
                </option>

                <option>
                Informatique
                </option>

                <option>
                Audio
                </option>

                </select>

                <textarea
                name="description"
                value={selectedProduct?.description}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    description: e.target.value,
                  })
                }
                rows="4"
                placeholder="Description du produit"
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                />

              <button className="btn btn-primary" type="submit">
                Enregistrer
              </button>

            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Fermer</button>
              </form>
            </div>

          </div>
        </dialog>
  );
}

export default EditProductModal;