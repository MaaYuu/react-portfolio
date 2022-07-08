import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='App'>
    <Sidebar/>
    <div className="page">
       {/* Span can be used to group elements for styling purposes,
        or because they share attribute values */}
       {/*
       "&lt" : "<" sign | "gt" : ">" sign
       <body>
        */}
      <span className="tags top-tags">&lt;body&gt;</span>
      {/*
      <Outlet /> should be used in parent route elements to render their child route elements.
       */}
      <Outlet />
      
      <span className="tags bottom-tags">
        &lt;body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>


    </div>
    </div>
  )
}

export default Layout