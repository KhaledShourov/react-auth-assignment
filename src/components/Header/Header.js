import React from 'react';
import './Header.css'
const Header = () => {
  return (
    
     <div className="header">
      <div className="container">
        <div className="row">
        <div div className = "col-md-6 col-sm-12" >
          <div className="brand"><h3>Desh Matro</h3></div>
        </div>
          <div className="col-md-6 col-sm-12 mt-2">
            <nav>
              <a href="/home">Home</a>
              <a href="/contact">Contact</a>
              <a href="/destination">Destination</a>
              <a href="/blog">Blog</a>
              <a href="/login">Login</a>
          </nav>
          </div>
        </div>
      </div>
     </div>
     

  
  );
};

export default Header;