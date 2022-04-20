import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Articles />
    </div>
  );
}

export default App;
