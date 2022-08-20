import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import EditItems from "./components/edit-items.component";
import EditHours from "./components/edit-hours.component";
import AddItems from "./components/add-item.component";
import Website from "./components/website.component";

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' exact element={<Website/>} />
        <Route path='/menu-edit/:id' element={<EditItems/>} />
        <Route path='/menu-add' element={<AddItems/>} />
        <Route path="/add-hours" element={<EditHours/>} />
      </Routes>
    </Router>
  );
}

export default App;
