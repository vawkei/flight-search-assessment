import Layout from "./components/layout/Layout"
import { Route, Routes } from "react-router-dom"
import TravelPage from "./pages/TravelPage"
import FlightsPage from "./pages/FlightsPage"
import HotelsPage from "./pages/HotelsPage"
import VacationRentalsPage from "./pages/VacationRentalsPage"
import ExplorePage from "./pages/ExplorePage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage"

function App() {
  

  return (
    <Layout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/vacation-rentals" element={<VacationRentalsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
