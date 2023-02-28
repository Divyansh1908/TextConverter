import React from 'react'
import PropTypes from 'prop-types'

// rfc - react function based components
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
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
