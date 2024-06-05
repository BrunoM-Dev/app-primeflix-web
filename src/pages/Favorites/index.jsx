import { useEffect, useState } from 'react'
import './favorites.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Favorites() {
    
    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            const moviesSave = JSON.parse(localStorage.getItem('@primeflix'))
            setMovies(moviesSave || []);
        }, []
    )

    function removeMovieSave(index) {
        let filterMovies = movies.filter( (movie) => {
            return (movie.id !== index)
        })

        setMovies(filterMovies)
        localStorage.setItem('@primeflix', JSON.stringify(filterMovies));
        toast.success("Filme removido com sucesso!")
    }
    
    return (
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {movies.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {
                    movies.map( (filmeItem) => {
                        return (
                            <li key={filmeItem.id}>
                                <h2>{filmeItem.title}</h2>
                                <div>
                                    <Link to={`/movie/${filmeItem.id}`}>Ver detalhes</Link>
                                    <button onClick={() => removeMovieSave(filmeItem.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
