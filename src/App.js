import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
        <ScrollToTop
          smooth
          width="22"
          height="22"
          color="white"
          style={{
            background: ' rgb(55 48 163)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
