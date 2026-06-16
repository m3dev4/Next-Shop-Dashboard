import { Link } from "react-router-dom"

function ListProducts({produits}){
    console.log(produits)
    return(
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 text-black">
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
                        <td className="space-x-2">
                            <button className="btn btn-primary">modifier</button>
                            <button className="btn btn-error">supprimer</button>
                            <Link to={`/detail/${p.id}`}><button className="btn btn-secondary">details</button></Link>
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