
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/HomePage'
import Quiz from './components/Quiz'

function App() {
  return (
  <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
