import './App.css';
import HomePage from "./components/home_page/HomePage";
import NavBar from "./components/NavBar/NavBar";
import './bace/bace.css';
import Card from "./components/card/card";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HomePage/>
        <Card/>
        <Contact/>
    </div>
  );
}

export default App;
