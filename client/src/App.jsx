import './App.css';
import Header from './components/header';
import background from './assets/accupressure_background.jpg';
import CardDisplay from './components/cardDisplay';
import Footer from './components/footer';
import RequestCallbackForm from './components/rcallback';


function App() {
  return (
    <>
     <Header />
     <div className='background-section'>
      <img src={background} ></img>
     </div>
     <CardDisplay/>
     <RequestCallbackForm/>
     <Footer/>
    </>
    );
}

export default App;
