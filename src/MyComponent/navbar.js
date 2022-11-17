import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

import React, { useState, Component } from 'react'

export default class navbar extends Component {
  constructor() {
    super()
  
    this.state = {
     mode:'light',
    }
  }

  render() {
   

   
   const toggleMode = () => {
     if (this.state.mode === 'light') {
       this.setState({mode : 'dark'});
       document.body.style.backgroundColor = '#042743';
       // showalert("dark mode hase been enabled", "success");
     }
     else {
      this.setState({mode : 'light'});
       document.body.style.backgroundColor = 'white';
       // showalert("light mode hase been enabled", "success");
     }
   };

    return (
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="textarea">textarea</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">about</a>
            </li>
          </ul>

            <div className={`form-check form-switch mx-3 text-${this.state.mode==='light'?'dark':'white'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
                <label className="form-check-label" htmlfor="flexSwitchCheckDefault">enable dark</label>
           </div>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
  }
}


// navbar.defaultProps = {
//   title: "yor title here",
//   searchbar: true
// }
// navbar.propTypes = {
//   title: PropTypes.string,
//   searchbar: PropTypes.bool.isRequired
// }

// props.toggleMode