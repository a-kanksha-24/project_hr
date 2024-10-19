import './App.css';
import Header from './components/header';
import background from './assets/accupressure_background.jpg';
import CardDisplay from './components/cardDisplay';
import Footer from './components/footer';


function App() {
  return (
    <>
     <Header />
     <div className='background-section'>
      <img src={background} ></img>
     </div>
     <CardDisplay/>
     <Footer/>
    </>
    );
}

export default App;
