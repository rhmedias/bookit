import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Navbar extends Component {
    
    render() { 
        return ( <div>
            <nav class="navbar navbar-expand-lg navbar-light d-print" role="navigation">
  <a class="navbar-brand" href="/">Bookit</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Offers <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Become an Enterprise Partner</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Become an Ambassador</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Support</a>
      </li>
      
    </ul>
    <div>
    
      <Link to='/signup'>
        <button type="button" class="btn btn-outline-primary btn-md m-2">Sign Up</button>
      </Link>
      <Link to='/login'>
        <button type="button" class="btn btn-outline-primary btn-md m-2">Login</button>
      </Link>
      
      
      
      
    </div>
    
  </div>
</nav>
        </div> );
    }
}
 
export default Navbar;