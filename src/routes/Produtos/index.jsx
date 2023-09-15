import { Link, useNavigate, useParams } from "react-router-dom"
import { listaProdutos } from "../../components/listaProduto"

export default function Produtos() {
    

    return(
        <main className="container">
            <h1>Aparelhos</h1>
            {listaProdutos.map(prod => (
                <div  key={prod.id}>
                    <Link className="produto" to={`/produtos/editar/${prod.id}`}>
                        Aparelho: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )

}