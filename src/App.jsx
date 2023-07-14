import "./App.css";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutProduct from "./pages/AboutProduct/AboutProduct";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      {/* <AboutProduct /> */}
      <Blog />
    </div>
  );
}

export default App;
