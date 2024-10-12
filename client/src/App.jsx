import './App.css';
import Header from './components/header';
import background from './assets/accupressure_background.jpg'; // Ensure this is the correct file path


function App() {
  return (
    <>
     <Header />
     <div>
      <img src={background}></img>
     </div>
    </>
    );
}

export default App;
