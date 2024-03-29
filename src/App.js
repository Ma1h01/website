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
        <p>Built with React by Yihao</p>
        <p>Copyright 2024 | All Rights Reserved</p>
      </footer>
    </div>
    
  )
}

export default App;
