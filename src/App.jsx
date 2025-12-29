import LandingPage from "./pages/LandingPage"
import SantelmoPage from "./pages/SantelmoPage"
import Footer from "./sections/Footer"
import Navigation from "./sections/Navigation"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navigation/>

    <main className="px-20 pt-24 space-y-20">
      <Routes >
        <Route path="*" element={<LandingPage />} />
        <Route path="/santelmo" element={<SantelmoPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      </main>

      <Footer/>
    </div>
  )
}

export default App