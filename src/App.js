import './App.css';
import Header from './components/header';
import Tips from './components/tips';
import FinancialSuccess from './components/FinancialService';
import WhoWeAre from './components/vission';
import TestimonialsCarousel from './components/testimonial';
import Footer from './components/footer';
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
import GetFreeCommodityTips from './components/getfreetrialbanner';
import Service from './components/service';
import Aboutbanner from './components/aboutdiv';
import ContactForm from './components/contactform';
import Contact from './components/contact';
import StickyButton from './components/sticky'; // Import the StickyButton component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
              <Footer />
            </>
          } />
          <Route path="/getfreetrial" element={
            <>
              <Header />
              <GetFreeCommodityTips/>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <Aboutbanner/>
              <WhoWeAre/>
              <Service/>
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Aboutbanner/>
              <Contact/>
              <ContactForm/>
              <Footer />
            </>
          } />
        </Routes>
        <StickyButton /> {/* Add the Sticky Button here */}
      </div>
    </Router>
  );
}

export default App;