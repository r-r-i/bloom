// Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/home/home';
import View from './components/view/view';
// Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  )
}

export default App;