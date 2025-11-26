import React from 'react';
export default function Footer() {
  return (
    <footer style={{textAlign:'center',padding:'24px 0',opacity:0.7}}>
      © {new Date().getFullYear()} Your Name — Built with React & Vite
    </footer>
  );
}
