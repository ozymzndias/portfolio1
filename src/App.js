
import './App.css';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Hire from './components/Hire/Hire.js';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Hire />
    </div>
  );
}

export default App;
