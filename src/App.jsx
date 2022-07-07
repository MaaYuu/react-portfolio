import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';

function App() {
  return (
    <>
    {/* Using Routes -> Route from RRD, we can specify routes */}
    <Routes>
      {/* In root route, we will show the "Layout" component */}
      <Route path='/' element={<Layout />} />
    </Routes>
    
    </>
  );
}

export default App;
