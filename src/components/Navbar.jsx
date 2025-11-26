import React from 'react';

export default function Navbar() {
  return (
    <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0'}}>
      <div style={{fontWeight:700}}>YourName</div>
      <div>
        <a href="#projects" style={{margin:'0 10px'}}>Projects</a>
        <a href="#about" style={{margin:'0 10px'}}>About</a>
        <a href="#contact" style={{margin:'0 10px'}}>Contact</a>
      </div>
    </nav>
  );
}
