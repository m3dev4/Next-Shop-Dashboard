<<<<<<< HEAD
=======


>>>>>>> bd353ac (dashboard)
function CreerProduit(){
  

const handleChange = (e) => {
  setProduct({
    ...product,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

    return(

   
<div className="flex justify-center items-center h-screen w-full">

    <div className="">

        <form onSubmit="handleSubmit">

           <div>
            <label htmlFor="">nom</label>
            <input type="text" name="" id="name" />
           </div>

            <div>
                <label htmlFor="">prix</label>
            <input type="text" name="" id="prix" />
           </div>

           <div>
            <label htmlFor="">stock</label>
            <input type="text" name="" id="stock" />
           </div>

            <div>
                <label htmlFor="">category</label>
                <select name="" id="">
                    <option value="">Chaussure</option>
                    <option value="">Téléphone</option>
                    <option value="">Audio</option>
                    <option value="">Informatique</option>
                    <option value="">Tablette</option>

                </select>
            </div>  

            <div>
                <label htmlFor="">description</label>
                <textarea type="text" id=""></textarea>
            </div>          

        </form>

    </div>

</div>
    )
}
}

export default CreerProduit