import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddCars from "./pages/AddCars";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      {" "}
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models/:id" element={<AddCars />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
