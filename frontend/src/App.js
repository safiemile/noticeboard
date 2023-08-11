import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Studetn from './Studetn';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import Home from './Home';
import FileUPload from './FileUPload';





function App() {
  return (
    <BrowserRouter>  
    <Routes> 
<Route path='/' element={<Studetn/>}></Route>
  
<Route path='/createnew' element={<CreateStudent/>}></Route>
<Route path='/update/:id' element={<UpdateStudent/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/image' element={<FileUPload/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App;
