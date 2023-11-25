import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Player from './Player';
import CreatePlayer from './CreatePlayer';
import UpdatePlayer from './UpdatePlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Player />}></Route>
          <Route path='/create' element={<CreatePlayer />}></Route>
          <Route path='/update/:id' element={<UpdatePlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
