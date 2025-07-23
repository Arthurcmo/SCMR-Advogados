import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BlogPost from "./pages/blogpost/BlogPost";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./components/footer/Footer";
import Thanks from "./pages/thanks/Thanks";
import BlogList from "./components/bloglist/BlogList";
import PracticeAreas from "./components/practiceareas/PracticeAreas";
import Attorneys from "./components/attorneys/Attorneys";
import NotFound from "./pages/notfound/NotFound";
import './App.css'; // Importando o CSS global
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/publicacoes" element={<>
                                    <h1 className="page-header">Publicações</h1>
                                    <BlogList />
                                    </>} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contato" element={<h1 style={{textAlign:'center', width:'100%'}}>Contato</h1>} />
        <Route path="/obrigado" element={<Thanks />} />
        <Route path="servicos" element={<PracticeAreas />} />
        <Route path="equipe" element={<>
                                    <h1 className="page-header">Equipe</h1>
                                    <Attorneys />
                                    </>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactPage/>
      <Footer />
    </>
  );
}

export default App;
