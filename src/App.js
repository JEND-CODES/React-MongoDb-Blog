import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import BlogHome from "./components/blog-home.component";
import BlogList from "./components/blog-list.component";
import BlogCreate from "./components/blog-create.component";
import BlogUpdate from "./components/blog-update.component";
import BlogRead from "./components/blog-read.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BlogHome} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog-create" component={BlogCreate} />
      <Route path="/update/:id" component={BlogUpdate} />
      <Route path="/read/:id" component={BlogRead} />
      </div>
    </Router>
  );
}

export default App;