import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import EditItems from "./components/edit-items.component";
import EditHours from "./components/edit-hours.component";
import AddItems from "./components/add-item.component";
import Website from "./components/website.component";

function App() {
  return (
    <Router>
      <div>
        <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/menu-edit/:id">Edit Item</Link>
            </li>
            <li>
              <Link to="/menu-add">Add Menu Item</Link>
            </li>
            <li>
              <Link to="/hours-edit">Change Hours</Link>
            </li>
          </ul>

        <hr />
        <Routes>
          <Route exact path='/'>
            <Website/>
          </Route>
          <Route path="/menu-edit/:id">
            <EditItems/>
          </Route>
          <Route path="/menu-add">
            <AddItems/>
          </Route>
          <Route path="/hours-edit">
            <EditHours/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
