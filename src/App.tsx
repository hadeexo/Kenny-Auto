import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarFeature from "./pages/CarDetails";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import TestSupabase from "./pages/TestSupabase";
import AddCar from "./pages/AddCar";
import CarDetails from "./pages/CarDetails";
function App() {
  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models/:id" element={<CarFeature />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-supabase" element={<TestSupabase />} />
          <Route path="/admin/add-car" element={<AddCar />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
