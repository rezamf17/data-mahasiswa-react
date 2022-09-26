
import './App.css';
import Navigation from './components/Navigation';
import DataMahasiswa from './views/DataMahasiswa';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
        <Routes>
          <Route path='/data-mahasiswa' element={<DataMahasiswa />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
