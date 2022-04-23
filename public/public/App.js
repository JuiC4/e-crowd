
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainMenu from './pages/MainMenu';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Error404 from './pages/Error404';
import Fire from './pages/Fire';
import CategoryPage from './pages/CategoryPage';
import Buying from './pages/Buying';
import RegPage from './pages/RegPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/event/id4" element={<Fire/>}/>
        <Route path="/purchase" element={<Buying/>}/>
        <Route path="/l" element={<RegPage/>}/>
      </Routes>
    </>
  );
}

export default App;
