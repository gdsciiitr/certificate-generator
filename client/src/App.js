import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generate from "./CertificatePages/Generate";
import Home from "./Pages/Home";
import Certificates from "./Pages/Certificates";
import Err from "./Pages/Err";
import Output from "./Pages/Output";
// import { saveAs } from "file-saver";
function App() {
  const location = useLocation();
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/cert1" element={<Generate />} />
        <Route path="/output" element={<Output />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<Err />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
