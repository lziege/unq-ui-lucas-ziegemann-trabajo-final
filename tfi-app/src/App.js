import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Player1VsIA from "./views/1PvsIA";
import Player1VsPlayer2 from "./views/1Pvs2P";
import HeaderView from "./views/HeaderView";

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
            <Route path="/1Pvs2P" element={<Player1VsPlayer2 />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
