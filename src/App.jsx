import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
