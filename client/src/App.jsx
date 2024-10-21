import "./App.css";
import Header from "./components/header";
import background from "./assets/accupressure_background.jpg";
import CardDisplay from "./components/cardDisplay";
import CardPage from "./components/cardPage";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./shop-context";

function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Header />
      <div className="background-section">
        <img src={background}></img>
      </div>
      <Routes>
        <Route path="/" element={<CardDisplay />} />
        <Route path="/Detail/:id" element={<CardPage />} />
      </Routes>
      <Footer />
      </Router>
      </ShopContextProvider>
  );
}

export default App;
