import { BrowserRouter, Routes, Route } from "react-router-dom";

// rotas
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Erro from "./pages/Erro";
import Favorites from "./pages/Favorites";

// componentes
import Header from "./components/Header";
import Favorite from "./pages/Favorites";
import FavoriteS from "./pages/Favorites";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/movie/:id" element={<Movie />} />    
                <Route path="/favorites" element={<Favorites />} />
                
                <Route path="*" element={<Erro />} />    
            </Routes> 
        </BrowserRouter>
    )
}