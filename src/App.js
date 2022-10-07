import './App.css';
import UserForm from './components/UserForm/UserForm';
import Home from './components/Home/Home';
import MenuBar from './layout/MenuBar';
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

function App() {

  const url = 'https://frontend-take-home.fetchrewards.com/form';
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    })
    .then((response) => {
      setFormData(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<UserForm data={formData} />} />
      </Routes>
      <MenuBar />
    </div>
  );
}

export default App;
