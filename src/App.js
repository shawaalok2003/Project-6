import './App.css';
import Header from './components/header';
import Tips from './components/tips';
import FinancialSuccess from './components/FinancialService';
import Service from './components/service';
import WhoWeAre from './components/vission';
import TestimonialsCarousel from './components/testimonial';
import Footer from './components/footer';
import LandingPage from './components/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Banner from './components/accurbanner';
import Banner1 from './components/banner';
import AccurAISection from './components/accurtext';
import Banner2 from './components/accurbanner1';
import Accurdiv from './components/accurdiv';
import Supbanner from './components/supportbanner';
import Supdiv from './components/supportdiv';
import Suptext from './components/supporttext';
import TestimonialsGrid from './components/testimonial';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route: Show everything except LandingPage */}
          <Route path="/" element={
            <>
              <Header />
              <Banner1/>
              <Tips />
              <FinancialSuccess />
              <Service />
              <WhoWeAre />
              <TestimonialsCarousel />
              <Footer />
            </>
          } />

          {/* About Page Route: Show Header and LandingPage only */}
          <Route path="/about" element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          } />
<Route path="/accurate" element={
            <>
              <Header />
              <Banner />
              <AccurAISection/>
              <Banner2 />
              <Accurdiv/>
              <Footer />
            </>
          } />
          <Route path="/support" element={
            <>
              <Header />
              <Supbanner/>
              <Suptext/>
              <Supdiv/>
              <TestimonialsGrid/>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;