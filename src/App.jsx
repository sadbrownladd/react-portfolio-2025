import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import Header from './layouts/Header';
import './index.css';

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/education" element={<div>Education Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Router>
    </PageTitleProvider>
  );
}

export default App;