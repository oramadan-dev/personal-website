import { Navbar } from "./components/navigation";
import {
    Home,
    About,
    Education,
    Skills,
    Resume,
    Contact,
} from "./components/sections";

function App() {

  return (
    <>
      <Navbar />

      {/* Portfolio Sections */}
      <Home />
      <About />
      <Education />
      <Skills />
      <Resume />
      <Contact />
    </>
  )
}

export default App
