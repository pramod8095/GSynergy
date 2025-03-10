import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import { auth } from "./service/firebase/firebase";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector(state=>state.optimus.isLogin)
  return (
    <div className="App">
    
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/details" element={ isLogged ? <Hero />: <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
