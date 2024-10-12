// Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Models
// Components
import Home from './components/home/home';
import View from './components/view/view';
import Blanket from './components/blanket/blanket';
import RichterSphere from './components/richterSphere/richterSphere';
import NotFound404 from './components/notFound/notFound';
// CSS
// Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/particle-sim/blanket" element={<Blanket />} />
        <Route path="/particle-sim/richter-sphere" element={<RichterSphere />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App;