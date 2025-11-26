import React from 'react';

const projects = [
  { id:1, title: 'HockeyChess Quiz', desc: 'Kids quiz app built in Unity. Link: example.com' },
  { id:2, title: 'Rugby One on One', desc: 'Prototype game UI and mechanics.' },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div style={{display:'grid',gap:12}}>
          {projects.map(p => (
            <div key={p.id} style={{background:'#071124',padding:16,borderRadius:8}}>
              <h3 style={{margin:'0 0 6px'}}>{p.title}</h3>
              <p style={{margin:0}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
