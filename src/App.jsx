import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewsReaderHome from './components/NewsReaderHome';
import NewsReaderDetails from './components/NewsReaderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NewsReaderHome />} />
        <Route path='/news-reader-details' element={<NewsReaderDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
