import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartPage } from '@/views/StartPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}
