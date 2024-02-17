import './App.css';
import NavBar from './components/NavBar';
import ImageSlide from './components/ImageSlide';
import Intro from './components/Intro';
import ProjectCards from './components/ProjectCards';
function App() {
  return (
    <div>
      <NavBar/>
      <ImageSlide/>
      <Intro/>
      <ProjectCards/>
      <footer>
        <p>Made by Yihao Mai</p>
        <p>Copyright 2024 | All Rights Reserved</p>
      </footer>
    </div>
    
  )
}

export default App;
