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
import Guasha from './components/navbar/Treatment/guasha';
import Auricular from "./components/navbar/Treatment/auricular";
import Scalp from "./components/navbar/Treatment/scalpacu";
import Face from "./components/navbar/Treatment/face";
import Reflexology from "./components/navbar/Treatment/reflexology";
import Massage from "./components/navbar/Treatment/massage";

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
          <Route path="/Acupuncture" element={<Accupuncture/>} />
          <Route path="/Pulse Diagnosis" element={<PulseDiagnosis/>} />
          <Route path="/Aroma Therapy" element={<AromaTherapy/>} />
          <Route path="/Acupressure" element={<Accupressure/>} />
          <Route path="/Dry Cupping" element={<DryCuppingTherapy/>} />
          <Route path="/Magnet Therapy" element={<MagnetTherapy/>} />
          <Route path="/Fire Cupping" element={<FireCupping/>} />
          <Route path="/Wet Cupping" element={<WetCuppingTherapy/>} />
          <Route path="/sujok" element={<Sujok/>} />
          <Route path="/Seed Therapy" element={<SeedTherapy/>} />
          <Route path="/Color Therapy" element={<ColorTherapy/>} />
          <Route path="/Diet and Nutrision" element={<Diet/>} />
          <Route path="/Guasha" element={<Guasha/>} />
          <Route path="/Auricular Acupuncture" element={<Auricular/>} />
          <Route path="/Scalp Acupuncture" element={<Scalp/>} />
          <Route path="/Face Cupping" element={<Face/>} />
          <Route path="/Reflexology" element={<Reflexology/>} />
          <Route path="/Massage" element={<Massage/>} />
        </Routes>
        <CallNowButton phoneNumber={8299178726} />
        <ChatButton/>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
