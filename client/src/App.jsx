import "./App.css";
import Header from "./components/header";
import background from "./assets/accupressure_background.jpg";
import CardDisplay from "./components/cardDisplay";
import CardPage from "./components/cardPage";
import Footer from "./components/footer";
import CallNowButton from "./components/callNowButton";
import RequestCallbackForm from "./components/rcallback";
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
        <CallNowButton phoneNumber={8299178726} />
        <RequestCallbackForm />
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
