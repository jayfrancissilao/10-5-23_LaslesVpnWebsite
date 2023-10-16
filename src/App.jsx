import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Plan from "./components/Plan/Plan";

import "/src/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Plan />
    </div>
  );
}

export default App;
