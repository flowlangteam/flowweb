import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TerminalBanner from './components/TerminalBanner';
import AboutFlow from './components/AboutFlow';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <TerminalBanner />
  
        <AboutFlow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
