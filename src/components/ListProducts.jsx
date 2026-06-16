function ListProducts({produits}){
    console.log(produits)
    return(
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                    produits.map(p=>(
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.stock}</td>
                        <td>{p.category}</td>
                        <td>
                            <button className="btn btn-ghost btn-xs">modifier</button>
                            <button className="btn btn-ghost btn-xs">supprimer</button>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </td>
                    </tr>
                    ))

                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProducts