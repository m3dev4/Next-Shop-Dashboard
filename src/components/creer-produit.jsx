import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CreerProduit(){

const {addProduct}=useProducts()
const [errors, setErrors] = useState({});
const [formData,setFormData] = useState({

name:"",
price:"",
stock:"",
category:"",
description:""

});
const navigate = useNavigate();

const handleChange = (e)=>{

setFormData({

...formData,

[e.target.name]: e.target.value

})

};

const validate = ()=>{

let newErrors = {};

// Nom

if(!formData.name.trim()){

newErrors.name="Le nom est obligatoire";

}
else if(formData.name.trim().length < 2){

newErrors.name="Minimum 2 caractères";

}
else if(!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.name)){

newErrors.name="Le nom contient des caractères invalides";

}

// Prix

if(!formData.price){

newErrors.price="Le prix est obligatoire";

}
else if(Number(formData.price)<=0){

newErrors.price="Le prix doit être supérieur à 0";

}

// Stock

if(!formData.stock){

newErrors.stock="Le stock est obligatoire";

}
else if(!Number.isInteger(Number(formData.stock))){

newErrors.stock="Le stock doit être un nombre entier";

}
else if(Number(formData.stock)<0){

newErrors.stock="Le stock ne peut pas être négatif";

}
else if(Number(formData.stock)<5){

newErrors.stock="Le stock doit superieur ou egale a 5";

}

// Catégorie

if(!formData.category){

newErrors.category="Choisissez une catégorie";

}

// Description

if(formData.description.length > 300){

newErrors.description=
"La description ne doit pas dépasser 300 caractères";

}

setErrors(newErrors);

return Object.keys(newErrors).length === 0;

}

const handleSubmit=(e)=>{

e.preventDefault();

if(validate()){

console.log(formData);

addProduct(formData)

navigate("/")

}

}

return (

<div className="min-h-screen bg-gradient-to-r from-stone-100 to-zinc-100 flex items-center justify-center">

    <form onSubmit={handleSubmit} className="my-32 bg-white w-full max-w-xl p-8 rounded-2xl shadow-xl">

        <h2 className="text-dark text-2xl font-bold mb-6">
        Ajouter un produit
        </h2>

        <div className="space-y-5">

            {/* Nom */}

            <div>

                <label className="text-gray-600 block mb-2">
                Nom du produit
                </label>

                <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Nike Air Max"
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
                />
                {errors.name && (
                <small style={{ color: "red" }}>
                    {errors.name}
                </small>
                )}


            </div>
            
            {/* Prix */}

            <div>

                <label className="text-gray-600 block mb-2">
                Prix
                </label>

                <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                placeholder="120000"
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                />
                {errors.price && (
                <small style={{ color: "red" }}>
                    {errors.price}
                </small>
                )}

            </div>

            {/* Stock */}

            <div>

                <label className="text-gray-600 block mb-2">
                Stock
                </label>

                <input
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number"
                placeholder="15"
                className="
                w-full
                text-gray-500
                p-3
                rounded-lg
                border
                border-slate-700
                "
                />
                {errors.stock && (
                <small style={{ color: "red" }}>
                    {errors.stock}
                </small>
                )}

            </div>

            {/* Catégorie */}

            <div>

                <label className="text-gray-600 block mb-2">
                Catégorie
                </label>

                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
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
                {errors.category && (
                <small style={{ color: "red" }}>
                    {errors.category}
                </small>
                )}

            </div>

            {/* Description */}

            <div>

                <label className="text-gray-600 block mb-2">
                Description
                </label>

                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
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
                {errors.description && (
                <small style={{ color: "red" }}>
                    {errors.description}
                </small>
                )}

            </div>

            <button
                type="submit"
                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                py-3
                rounded-lg
                transition
                "
                >
                Ajouter le produit
            </button>

        </div>

    </form>

</div>


)

}

export default CreerProduit