import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Suspense, lazy } from 'react';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SlideTransition from './components/SlideTransition';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <PageTitleProvider>
        <Router>
          <Box sx={{ display: 'flex' }}>
            <SideNav />
            <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 } }}>
              <Header />
              <ErrorBoundary>
                <Suspense fallback={<div style={{ color: 'var(--text-color)', textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<SlideTransition><Home /></SlideTransition>} />
                    <Route path="/education" element={<SlideTransition><Education /></SlideTransition>} />
                    <Route path="/projects" element={<SlideTransition><Projects /></SlideTransition>} />
                    <Route path="/contact" element={<SlideTransition><Contact /></SlideTransition>} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
              <Footer />
            </Box>
          </Box>
        </Router>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;