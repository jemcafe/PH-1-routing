import React from 'react';
import { NavLink } from 'react-router-dom' 

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      {/* <h3>FAQ</h3>
      <h3>Company</h3> */}
      <NavLink activeClassName="red" to="/about/faq">FAQ</NavLink>
      <NavLink activeClassName="blue" to="/about/Company">Company</NavLink>
      {props.children}
    </div>
  )
}