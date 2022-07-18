import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/Home/About';

function App() {
  return (
    <>
    {/* Using Routes -> Route from RRD, we can specify routes */}
    <Routes>
      {/* In root route, we will show the "Layout" component */}
      <Route path='/' element={<Layout />}>
        {/* "index" in here means path= */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
       </Route>
    </Routes>
    
    </>
  );
}

export default App;
