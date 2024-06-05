import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import './movie.css';
import { toast } from "react-toastify";

export default function Movie() {

    const { id } = useParams();
    const navegate = useNavigate()
    const [ movie, setMovie ] = useState({});
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "c9f5368308f29a5af1579e259e5a164d",
                    language: "pt-br",
                }
            })
            .then((response) => {
                setMovie((response.data));
                setLoading(false)
            })
            .catch(() => {
                navegate('/', {
                    replace: true
                })
            })
        }
        
        loadFilme()
    }, [id, navegate])



    function saveMovie() {
        const myList = localStorage.getItem("@primeflix");

        let moviesSaves = JSON.parse(myList) || []
        
        const hasMovie = moviesSaves.some( (movieItem) => movieItem.id === movie.id )

        if (hasMovie) {
            toast.warn('Este filme ja está salvo')
            return;
        }

        moviesSaves.push(movie);
        localStorage.setItem("@primeflix", JSON.stringify(moviesSaves))
        toast.success("Filme salvo com sucesso!")
    }

    if(loading) {
        return(
            <div className="box-loading">
                <div className="loader-circle"></div>
            </div>
        )
    } 

    return (
        <div className="filme-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`Filme ${movie.title}`} />
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>

            <strong>Avaliação: {(movie.vote_average).toFixed(1)} / 10</strong>

            <div className="area-buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}