import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BlogAbout from "./pages/Home/components/Blog/Blog";
import LikePage from "./pages/LikePage/LikePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <BlogAbout />
            </>
          }
        />
        <Route
          path="/like"
          element={
            <>
              <LikePage />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
