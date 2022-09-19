import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Pro1 from './Pro1';
import Pro2 from './Pro2';
import Pro3 from './Pro3';

function App(){
  return(
    <>
   <Router>
    <Link to="Pro1">Program 1</Link> | <Link to="Pro2">Program 2</Link> | <Link to ="Pro3" >Program 3</Link>
    <Routes>
      <Route path="/Pro1" element={<Pro1/>}/>
      <Route path="/Pro2" element={<Pro2/>}/>
      <Route path ="/Pro3" element ={<Pro3/>}/>
    </Routes>
   </Router>
   
     </>
  );
}
export default App;


