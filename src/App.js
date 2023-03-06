import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DataEntry from './pages/DataEntry/DataEntry'
import Recommendation from './pages/Recommendation/Recommendation'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <DataEntry /> } />
          <Route path='/recommendation' element={ <Recommendation /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
