import Header from "./components/Navbar";
import { useEffect } from "react";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import FAQComponent from "./components/FAQComponent";
// import Card from "./Card";/
// import CardData from "./components/Whydail";
// import Slider from "./Slider";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookWalkthrough from "./components/BookWalkthrough";
// import Product from "./Product";
// import FAQ from "./FAQ";
// import TryIt from "./TryIt";
// import Pricing from "./Pricing";
import Home from "./components/Home";

// import FormPopup from "./FormPopup";

const App = () => {
  useEffect(() => {
    const hotjarId = import.meta.env.VITE_HOTJAR_ID;
    if (hotjarId) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${hotjarId},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <div className="md:px-16 md:py-8">
        <Header />
        {/* <Hero />
        <CardData /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/faq" element={<FAQComponent />} /> */}
          {/* <Route path="/try-it" element={<BookWalkthrough />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/" element={<Product />} /> */}
        </Routes>
        {/* <Hero />
        <Features />
        <CardData /> */}
        {/* <BookWalkthrough /> */}

        {/* <Slider /> */}
        {/* <BookWalkthrough /> */}
        {/* <FAQComponent /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
