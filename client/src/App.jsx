import "./App.css";
import Header from "./components/header";
import background from "./assets/accupressure_background.jpg";
import CardDisplay from "./components/cardDisplay";
import CardPage from "./components/cardPage";
import About from "./components/navbar/about/aboutus";
import Team from "./components/navbar/about/team"
import Awards from "./components/navbar/about/awards";
import Events from "./components/navbar/upcomingevent";
import Contacts from "./components/navbar/contacts";
import Gallery from "./components/navbar/gallery";
import Videos from "./components/navbar/videos";
import Acufacial from "./components/navbar/Treatment/acufacial";
import Atomic from "./components/navbar/Treatment/atomic";
import HeatCold from "./components/navbar/Treatment/specialheat";
import Colon from "./components/navbar/Treatment/colon";
import Ear from "./components/navbar/Treatment/ear";
import Fire from "./components/navbar/Treatment/firecupping";
import Hyperbaric from "./components/navbar/Treatment/hyperarabic";
import Mudra from "./components/navbar/Treatment/mudra";
import Ozone from "./components/navbar/Treatment/ozone";
import Paediatric from "./components/navbar/Treatment/paedriatic";
import Physio from "./components/navbar/Treatment/physio";
import Point from "./components/navbar/Treatment/point";
import Reflexology from "./components/navbar/Treatment/reflexo";
import Scalp from "./components/navbar/Treatment/scalp";
import Weight from "./components/navbar/Treatment/weight";
import Wholebody from "./components/navbar/Treatment/wholebody";
import Yoga from "./components/navbar/Treatment/yoga";
import Accupressure from "./components/navbar/Treatment/accupressure";
import Accupuncture from "./components/navbar/Treatment/accupuncture";
import Moxibustion from "./components/navbar/Treatment/moxibustion";
import Naturopathy from "./components/navbar/Treatment/naturotherapy";
import CuppingTherapy from "./components/navbar/Treatment/cuppingtherapy";
import Footer from "./components/footer";
import CallNowButton from "./components/callNowButton";
import RequestCallbackForm from "./components/rcallback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./shop-context";
import ChatButton from "./components/whatsapp";

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
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Videos" element={<Videos/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Accupuncture" element={<Accupuncture/>} />
          <Route path="/Accupressure" element={<Accupressure/>} />
          <Route path="/Moxibustion" element={<Moxibustion/>} />
          <Route path="/CuppingTherapy" element={<CuppingTherapy/>} />
          <Route path="/FireCupping" element={<Fire/>} />
          <Route path="/Scalp" element={<Scalp/>} />
          <Route path="/Acufacial" element={<Acufacial/>} />
          <Route path="/Point" element={<Point/>} />
          <Route path="/Paedriatic" element={<Paediatric/>} />
          <Route path="/Ear" element={<Ear/>} />
          <Route path="/Hyperbolic" element={<Hyperbaric/>} />
          <Route path="/Atomic" element={<Atomic/>} />
          <Route path="/WholeBody" element={<Wholebody/>} />
          <Route path="/Ozone" element={<Ozone/>} />
          <Route path="/Colon" element={<Colon/>} />
          <Route path="/Physiotherapy" element={<Physio/>} />
          <Route path="/HeatCold" element={<HeatCold/>} />
          <Route path="/Naturopathy" element={<Naturopathy/>} />
          <Route path="/Yoga" element={<Yoga/>} />
          <Route path="/Mudra" element={<Mudra/>} />
          <Route path="/Reflexology" element={<Reflexology/>} />
          <Route path="/Weight" element={<Weight/>} />
        </Routes>
        <CallNowButton phoneNumber={8299178726} />
        <RequestCallbackForm />
        <ChatButton/>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
