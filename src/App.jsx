import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <>
    {/* Using Routes -> Route from RRD, we can specify routes */}
    <Routes>
      {/* In root route, we will show the "Layout" component */}
      <Route path='/' element={<Layout />}>
        {/* "index" in here means path= */}
        <Route index element={<Home />} />
       </Route>
    </Routes>
    
    </>
  );
}

export default App;
