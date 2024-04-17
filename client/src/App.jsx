import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage.jsx';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
