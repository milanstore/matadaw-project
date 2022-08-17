import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NewRaffleCard from "./pages/NewRaffleCard";
// import RaffleCard from "./components/NewRaffle/RaffleCard";
// import MyRaffle from "./pages/MyRaffle";
import NewRaffle from "./pages/NewRaffle";
// import Prize from "./pages/Prize";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/my-account" element={<Profile />}></Route>
          <Route path="/create-raffle" element={<NewRaffle />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Prize /> */}
      {/*  */}
      {/* <MyRaffle /> */}
      {/* <RaffleCard /> */}
      {/* <NewRaffleCard /> */}
    </div>
  );
}

export default App;
