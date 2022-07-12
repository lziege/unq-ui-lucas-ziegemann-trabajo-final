import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Player1VsIA from "./views/Player1VsIA";
import Player1VsIAFinalizada from "./views/Player1VsIAFinalizada";
import Player1VsPlayer2 from "./views/Player1VsPlayer2";
import Player1VsPlayer2Finalizada from "./views/Player1VsPlayer2Finalizada";
import HeaderView from "./views/HeaderView";
import ReglasView from "./views/ReglasView";

const NoMatch = () => <div style={{ height: "100vh" }}>NoMatch</div>

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderView />
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route path="/1PvsIA" element={<Player1VsIA />} />
            <Route path="/1PvsIA/PartidaFinalizada" element={<Player1VsIAFinalizada />} />
            <Route path="/1Pvs2P" element={<Player1VsPlayer2 />} />
            <Route path="/1Pvs2P/PartidaFinalizada" element={<Player1VsPlayer2Finalizada />} />
            <Route path="/ReglasDelJuego" element={<ReglasView />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
