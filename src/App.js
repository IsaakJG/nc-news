import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
