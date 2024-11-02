import "./App.css";
import Header from "./components/header";
import CardDisplay from "./components/cardDisplay";
import CardPage from "./components/cardPage";
import About from "./components/navbar/about/aboutus";
import Team from "./components/navbar/about/team"
import Awards from "./components/navbar/about/awards";
import Events from "./components/navbar/upcomingevent";
import Contacts from "./components/navbar/contacts";
import Gallery from "./components/navbar/gallery";
import Videos from "./components/navbar/videos";
import Accupressure from "./components/navbar/Treatment/accupressure";
import Accupuncture from "./components/navbar/Treatment/accupuncture";
import Footer from "./components/footer";
import CallNowButton from "./components/callNowButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./shop-context";
import ChatButton from "./components/whatsapp";
import PulseDiagnosis from "./components/navbar/Treatment/pulseDiagnosis";
import AromaTherapy from "./components/navbar/Treatment/aromatherapy";
import DryCuppingTherapy from "./components/navbar/Treatment/cuppingtherapy";
import MagnetTherapy from "./components/navbar/Treatment/magnet";
import FireCupping from "./components/navbar/Treatment/firecupping";
import Sujok from "./components/navbar/Treatment/sujok";
import WetCuppingTherapy from "./components/navbar/Treatment/wetCupping";
import SeedTherapy from "./components/navbar/Treatment/seedTherapy";
import ColorTherapy from "./components/navbar/Treatment/color";
import Diet from "./components/navbar/Treatment/diet";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<CardDisplay />} />
          <Route path="/Detail/:id" element={<CardPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Videos" element={<Videos/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Accupuncture" element={<Accupuncture/>} />
          <Route path="/Pulse Diagnosis" element={<PulseDiagnosis/>} />
          <Route path="/Aroma Therapy" element={<AromaTherapy/>} />
          <Route path="/Accupressure" element={<Accupressure/>} />
          <Route path="/Dry Cupping" element={<DryCuppingTherapy/>} />
          <Route path="/Magnet Therapy" element={<MagnetTherapy/>} />
          <Route path="/FireCupping" element={<FireCupping/>} />
          <Route path="/WetCupping" element={<WetCuppingTherapy/>} />
          <Route path="/sujok" element={<Sujok/>} />
          <Route path="/seedTherapy" element={<SeedTherapy/>} />
          <Route path="/Color" element={<ColorTherapy/>} />
          <Route path="/diet" element={<Diet/>} />

        </Routes>
        <CallNowButton phoneNumber={8299178726} />
        <ChatButton/>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
