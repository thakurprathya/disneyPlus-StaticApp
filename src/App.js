import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //including react router for changing pages without reloading
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

const app = {scroolBehavior: "smooth"};

function App() {
  return (
    <div className={app}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;