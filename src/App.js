import Nav from './components/Nav';

import Hero from './components/Hero';
import Starting from './components/Starting';
import Favorite from './components/Favorite';
import Extras from './components/Extras';
import Pay from './components/Pay';
import Codes from './components/Codes';
import Ques from './components/Ques';
import Terms from './components/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" font-star">
      <Nav />
      
      <Hero />
      <Starting />
      <Favorite />
      <Extras />
      <Pay />
      <Codes />
      <Ques />
      <Terms />
      <Footer />
    </div>
  );
}

export default App;
