import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// rfc - react function based components
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* Change a and href -> link and to from react router*/}

            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            {/* no need of search for now */}
            
            {/* Use backtick for class names and then use $sign along with the prop to set value */}
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'} mx-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </div>
        </div>
    </nav>
  )
}

//setting prop types to valid data types so that you can keep a check on what data type to be used
//if you put isrequired and you dont send data then it will show error/ but this will not show error is defaultProps are set
Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string
}
//when props are not set then use it as a default value
Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "Set about here"
};
