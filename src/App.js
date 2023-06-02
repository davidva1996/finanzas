import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Emails from "./components/Emails"
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
       <Emails/>
       <Cards/>
       <Footer/>
    </div>
  );
}

export default App;
