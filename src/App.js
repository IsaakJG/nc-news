import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topics from "./components/Topics";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/topics/:topic" element={<Topics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
