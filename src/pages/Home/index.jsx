import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadFilmes() {
        const response = await api.get("/movie/now_playing", {
            params: {
                api_key: "c9f5368308f29a5af1579e259e5a164d",
                language: "pt-br",
                page: 1,
            }
        })
        
        setFilmes(response.data.results.slice(0, 10))
        setLoading(false)
    }

    loadFilmes();
    }, [])

    if(loading) {
        return(
            <div className="box-loading">
                <div className="loader-circle"></div>
            </div>
        )
    } 
    
    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id} className="filme">
                            <h2>{filme.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`Filme ${filme.title}`} className="capa" />
                            <Link to={`/movie/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}