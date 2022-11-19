import './App.css';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Different from './Components/Different/Different';
import Testimonial from './Components/Testimonials/Testimonial';
import Simplify from './Components/Simplify/Simplify';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Different />
      <Testimonial />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
