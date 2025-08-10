import './App.css';
import NavBar from './components/NavBar';
import ImageSlide from './components/ImageSlide';
import Intro from './components/Intro';
import ProjectCards from './components/ProjectCards';
import { useEffect, useState } from 'react';
import { images as slideImages } from './components/ImageSlide';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.complete) return resolve();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // don't block on errors
      });

    (async () => {
      await Promise.all(slideImages.map((i) => load(i.src)));
      if (!cancelled) setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <div
        className="app-loading"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <NavBar/>
      <ImageSlide/>
      <Intro/>
      <ProjectCards/>
      <footer>
        <p>Built with React by Yihao</p>
        <p>Copyright 2025 | All Rights Reserved</p>
      </footer>
    </div>
    
  )
}

export default App;
