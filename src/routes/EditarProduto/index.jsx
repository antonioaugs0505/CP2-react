import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../components/listaProduto"

export default function EditarProduto() {
    
    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

    const salvar = ()=>{
        alert (`Produto: ${produto.nome} editado com sucesso!`)
        return navegacao ('/produtos')
    }

    return(
        <main className="container">
            <h1>Editando o produto</h1>
            <p>Produto: {produto.nome}</p>
            <p className="desc"> Descrição: {produto.descricao}</p>
            <img src={produto.imagem} alt=""/>
            <p >Preço: {produto.preco}</p>
        </main>
    )







    return(
        <main>
            <h1>Editando o produto</h1>
        </main>
    )

}