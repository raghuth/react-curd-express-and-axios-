import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {AddClientComponent} from './components/client/add-client'
import {ClientListComponent} from './components/client/client-list'

function App() {
  return (
    <>
    <div style={{margin:34}}>
      <Routes>        
          <Route exact path="/" element={<ClientListComponent />} /> 
          <Route path="/client/add" exact element={<AddClientComponent/>} /> 
          <Route path="/client/edit/:id" exact element={<AddClientComponent/>} />    
      </Routes>
      </div>
    </>
  );
}

export default App;
