import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Pokemon from "./pages/Pokemon/Pokemon";
import PokemonName from "./pages/PokemonName/PokemonName";
import Type from "./pages/Type/Type";
import OneType from "./pages/OneType/OneType";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:nomdupokemon" element={<PokemonName />} />
        <Route path="/type" element={<Type />} />
        <Route path="/type/:type" element={<OneType />} />
        <Route path="*" element={<div>Vous n'êtes pas censés etre ici</div>} />
      </Routes>
    </Router>
  );
}

export default App;
