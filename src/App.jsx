import LandingPage from "./pages/LandingPage";
import Footer from "./sections/Footer";
import Navigation from "./sections/Navigation";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { games } from "./data/games";
import GamePage from "./pages/GamePage";

const GameRouteWrapper = () => {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug);

  if (!game) return <Navigate to="/" replace />;

  return <GamePage {...game} />;
};

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navigation />

      <main className="px-5 lg:px-20 pt-24 space-y-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path=":slug" element={<GameRouteWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
