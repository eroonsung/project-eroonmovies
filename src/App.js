import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Episode from "./pages/Episode";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";


function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
