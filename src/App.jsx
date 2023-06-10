import "./App.css";
import {
  About,
  Header,
  Footer,
  Skills,
  Testimonial,
  Work,
} from "./importExport";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
