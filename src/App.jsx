import { useState } from 'react'
import './App.css'
// import './bootstrap.min.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
    <div id="screen" style={{ height: '100vh', backgroundColor }} className="w-100">
      <button className="btn" onClick={() => colorChange('#F2DDA4')}>
        PEACH  YELLOW
      </button>
      <button className="btn " onClick={() => colorChange('#413C58')}>
       ENGLISH VIOLET
      </button>
      <button className="btn " onClick={() => colorChange('#5A3A31')}>
        LITTLE BROWN
      </button>
      <button className="btn" onClick={() => colorChange('#31231E')}>
        VERY BROWN
      </button>
    </div>
    </>
  );
}

export default App;
