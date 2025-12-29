import Hero from "./sections/Hero"
import Navigation from "./sections/Navigation"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navigation/>

      <main className="px-20 pt-24 space-y-20">
        <Hero/>
        <Projects/>
        <About/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App