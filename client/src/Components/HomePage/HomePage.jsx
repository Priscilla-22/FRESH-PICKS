import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Featured from './Featured';
import Categories from './Categories';
import Testimonials from './Testimonials';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <Featured />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
