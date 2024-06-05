import './erro.css'
import { Link } from 'react-router-dom'

export default function Erro() {
    return (
        <div className="erro-box">
            <span>404</span>
            <h1>Página não encontrada!</h1>
            <Link to='/'>Veja todos os filmes!</Link>
        </div>
    )
}