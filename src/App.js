// src/App.js
import React from 'react';
import HeroSection from './Pages/HeroSection';
import CoupleSection from './Pages/CoupleSection';
import CountdownSection from './Pages/CountdownSection';
import EventDetails from './Pages/EventDetails';
import MapSection from './Pages/MapSection';
import OurStory from './Pages/OurStory';
import GallerySection from './Pages/GallerySection';
import GiftSection from './Pages/GiftSection';
import SaySomething from './Pages/SaySomething';
import GuestBook from './Pages/GuestBook';

const App = () => (
  <div>
    <HeroSection />
    <CoupleSection />
    <CountdownSection />
    <EventDetails />
    <MapSection />
    <OurStory />
    <GallerySection />
    <GiftSection />
    <SaySomething />
    <GuestBook />
  </div>
);

export default App;
