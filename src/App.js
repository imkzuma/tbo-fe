import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import HeaderApp from "./components/Header";
import './App.css';
import Section from "./components/Section";
import Kelompok from "./components/SectionKelompok";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <HeaderApp />
      <Search />
      <Section />
      <Kelompok />
      <Footer />
    </div>
  );
}

