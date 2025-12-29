import LandingPage from "./pages/LandingPage"

import SantelmoPage from "./pages/SantelmoPage"
import GikoPage from "./pages/GikoPage"
import KeenoPage from "./pages/KeenoPage"
import RatatataPage from "./pages/RatatataPage"
import GladiatorSiegePage from "./pages/GladiatorSiegePage"
import BulletBoiPage from "./pages/BulletBoiPage"
import DontTouchMyDuckPage from "./pages/DontTouchMyDuckPage"

import Footer from "./sections/Footer"
import Navigation from "./sections/Navigation"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navigation/>

    <main className="px-20 pt-24 space-y-20">
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/santelmo" element={<SantelmoPage />} />
        <Route path="/giko" element={<GikoPage />} />
        <Route path="/keeno" element={<KeenoPage />} />
        <Route path="/ratatata" element={<RatatataPage />} />
        <Route path="/gladiator-siege" element={<GladiatorSiegePage />} />
        <Route path="/bullet-boi" element={<BulletBoiPage />} />
        <Route path="/dont-touch-my-duck" element={<DontTouchMyDuckPage />} />
      </Routes>
    </main>

      <Footer/>
    </div>
  )
}

export default App