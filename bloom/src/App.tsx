// Modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/home/home';
// Services

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;