import './App.css';
import Header from './components/header';
import background from './assets/accupressure_background.jpg'; // Ensure this is the correct file path
// import CardComponent from './components/cardComponent';
import CardDisplay from './components/cardDisplay';


function App() {
  return (
    <>
     <Header />
     <div className='background-section'>
      <img src={background} ></img>
     </div>
     <CardDisplay/>
    </>
    );
}

export default App;
