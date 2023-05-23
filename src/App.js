import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Moivation from './MotivationComp/Moivation';
import AddMotivation from './MotivationComp/AddMotivation';
import EditMotivation from './MotivationComp/EditMotivation';
import APJBooks from './APJComponent/APJBooks';
import AddBooks from './APJComponent/AddBooks';
import EditBook from './APJComponent/EditBook';
import TamilBook from './TamilComponent/TamilBook';
import AddTamilBook from './TamilComponent/AddTamilBook';
import EditTamilBook from './TamilComponent/EditTamilBook';
import EnglishBook from './EnglishComponent/EnglishBook';
import AddEnglishBook from './EnglishComponent/AddEnglishBook';
import EditEnglishBook from './EnglishComponent/EditEnglishBook';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/motivation' element={<Moivation />}></Route>
          <Route path='/add/motivation' element={<AddMotivation />}></Route>
          <Route path='/edit/motivation/:id' element={<EditMotivation />}></Route>

          <Route path="/abdulkalam" element={<APJBooks />}></Route>
          <Route path="/add/apjbooks" element={<AddBooks />}></Route>
          <Route path="/editabjbooks/:id" element={<EditBook />}></Route>

          <Route path='/tamilbook' element={<TamilBook/>}> </Route>
          <Route path='/addTamilbooks' element={<AddTamilBook/>}></Route>
          <Route path='/editTamilbook/:id' element={<EditTamilBook/>}></Route>

          <Route path = "/englishbook" element={<EnglishBook/>}></Route>
          <Route path='/addenglishbooks' element={<AddEnglishBook/>}></Route>
          <Route path='/editEnglishbook/:id' element={<EditEnglishBook/>}></Route>

          
         

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
