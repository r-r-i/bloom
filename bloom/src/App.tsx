// Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Models
// Components
import Home from './components/home/home';
import View from './components/view/view';
import CombatMedic from './components/combatMedic/combatMedic.tsx';
import RichterCurve from './components/richterCurve/richterCurve.tsx';
import Astartes from './components/astartes/astartes.tsx';
import SigmarLied from './components/sigmarLied/sigmarLied.tsx'
import NotFound404 from './components/notFound/notFound';
// CSS
// Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/combat-medic" element={<CombatMedic />} />
        <Route path="/richter-curve" element={<RichterCurve />} />
        <Route path="/astartes" element={<Astartes />} />
        <Route path="/sigmar-lied" element={<SigmarLied />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </Router>
  )
}

export default App;