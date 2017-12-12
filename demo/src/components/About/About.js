import React from 'react';
import { Link } from 'react-router-dom' 

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      {/* <h3>FAQ</h3>
      <h3>Company</h3> */}
      <Link to="/about/FAQ">FAQ</Link>
      <Link to="/about/Company">Company</Link>
      {props.children}
    </div>
  )
}