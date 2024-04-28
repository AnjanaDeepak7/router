import "./App.css";
import About from "./components/About";
import Content from "./components/Content";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
