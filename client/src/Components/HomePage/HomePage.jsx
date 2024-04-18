import Header from './Header';
import Hero from './Hero';
import Featured from './Featured';
import Categories from './Categories';
import Testimonials from './Testimonials';
// import CallToAction from './CallToAction';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Categories />
      <Testimonials />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
