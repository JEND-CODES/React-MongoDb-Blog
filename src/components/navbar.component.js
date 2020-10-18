import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">React MongoDb Blog</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav navbar-center">
          
          <li className="navbar-item">
          <Link to="/blog" className="nav-link">Back Office</Link>
          </li>

          <li className="navbar-item">
          <Link to="/blog-create" className="nav-link">Nouveau Post</Link>
          </li>

          <a href="http://portfolio.planetcode.fr" style={{ marginTop: '20px', textDecoration: 'none', marginLeft: '10px', color: 'white', fontSize: '14px'}}>Démo réalisée par Jean-Eudes Nouaille-Degorce</a>
          
        </ul>
        </div>
      </nav>
    );
  }
}