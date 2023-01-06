import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Container } from "react-bootstrap";
import React from "react";

const Search = React.lazy(() => import("./components/Search"));
const HeaderApp = React.lazy(() => import("./components/Header"));

const Section = React.lazy(() => import("./components/Section"));
const Kelompok = React.lazy(() => import("./components/SectionKelompok"));
const Footer = React.lazy(() => import("./components/Footer"));

export default function App() {

  const LoadPage = () => {
    return (
      <Container fluid className='h-screen w-full bg-white overflow-hidden d-flex justify-content-center items-center'>
        <div>
          <div className='animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary'></div>
          <p className="text-center py-4 text-xl text-primary animate-pulse">Loading</p>
        </div>
      </Container>
    )
  }

  return (
    <React.Suspense fallback={LoadPage()}>
      <HeaderApp />
      <Search />
      <Section />
      <Kelompok />
      <Footer />
    </React.Suspense>
  );
}

