import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg 
      ${props.green ? 'navbar-green bg-green' : 
        (props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light')}`}>
    
    <div className="container-fluid" style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}}>
      <NavLink style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}} className="navbar-brand" to="/">{props.title}</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-3" >
            <NavLink style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}} className="nav-a active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: props.green===true? 'blue' : (props.mode==='light'?'black':'white')}} className="nav-a" to="/about">{props.about}</NavLink>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode==='dark'} onChange={props.toggleMode}/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

        <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.greenMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.green} onChange={props.greenMode}/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Green Mode</label>
        </div>

      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
                  title:PropTypes.string.isRequired,  //isRequired will give error if we will not send the title
                  about:PropTypes.string.isRequired
}

//defaukt props can set the default text if we dont pass prop initially
Navbar.defaultProps={
    title:'Set Title Here',
    about:'Set About Here'
}