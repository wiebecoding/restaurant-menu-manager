import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import EditItems from "./components/edit-items.component";
import EditHours from "./components/edit-hours.component";
import AddItems from "./components/add-item.component";
import Website from "./components/website.component";

function App() {
  return (
    <Router>
        <Route path='/' exact component={<Website />} />
        <Route path='/menu-edit/:id' component={<EditItems/>} />
        <Route path='/menu-add' component={<AddItems/>} />
        <Route path='/hours-edit' component={<EditHours/>} />
    </Router>
  );
}

export default App;
