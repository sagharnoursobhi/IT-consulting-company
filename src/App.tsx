import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NoPage from './pages/NoPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AppNavbar from './components/AppNavbar';
import { useEffect, useState, useMemo } from 'react';
import { BackgroundTitle }  from './models/general.type';

/* interface Props {
  isAuth: React.Dispatch<React.SetStateAction<boolean>> receive it as props
} */

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/clients' element={<Clients />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='*' element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
