import React from "react";

import Navbar from "./Components/Home/Navbar";
import IntroSection from "./Components/Home/IntroSection";
import AboutUs from "./Components/Home/AboutUs";
import Poojagrid from "./Components/Home/PoojaGrid";
import PoojaList from "./Components/Home/PoojaList";
import ProductPage from "./Components/Home/ProductPage";
import Footer from "./Components/Home/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Poojapage from "./Components/Pooja Page/Poojapage";
import ProductBuyPage from "./Components/Product Buy/ProductBuyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <IntroSection />
                <AboutUs />
                <Poojagrid />
                <PoojaList />
                <ProductPage />
                <Footer />
              </>
            }
          />
          <Route path="/poojaPage" element={<Poojapage/>} />
          <Route path="/productPage" element={<ProductBuyPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
