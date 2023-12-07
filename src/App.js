import './App.css';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <hr className="bg-black w-1/2 mx-auto"/>
      <Features/>
    </div>
  );
}

export default App;
