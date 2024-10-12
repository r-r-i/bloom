// Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Models
// Components
import Home from './components/home/home';
import View from './components/view/view';
import Enso from './components/enso/enso.tsx';
import RichterCurve from './components/richterCurve/richterCurve.tsx';
import NotFound404 from './components/notFound/notFound';
// CSS
// Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/particle-sim/enso" element={<Enso />} />
        <Route path="/particle-sim/richter-curve" element={<RichterCurve />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App;