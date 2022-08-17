import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RaffleCard from "./components/NewRaffle/RaffleCard";
import Home from "./pages/Home";
import MyRaffle from "./pages/MyRaffle";
import NewRaffle from "./pages/NewRaffle";
import NewRaffleCard from "./pages/NewRaffleCard";
import Prize from "./pages/Prize";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/raffle-card" element={<RaffleCard />}></Route>
          <Route path="/new-raffle-card" element={<NewRaffleCard />}></Route>
          <Route path="/my-account" element={<Profile />}></Route>
          <Route path="/my-raffle" element={<MyRaffle />}></Route>
          <Route path="/prize" element={<Prize />}></Route>
          <Route path="/create-raffle" element={<NewRaffle />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
