import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BlogPost from "./pages/blogpost/BlogPost";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./components/footer/Footer";
import Thanks from "./pages/thanks/Thanks";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contato" element={<ContactPage/>} />
        <Route path="/obrigado" element={<Thanks />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
