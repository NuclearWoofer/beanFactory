import React from 'react';

function About() {
  return (
    <div>
      <img src='/images/hs1.png' alt="Headshot" style={{ padding: '10px', display: 'block', margin: '0 auto', maxHeight: '100%', maxWidth: '100%', boxShadow: '0 9px 9px rgba(0, 0, 0, 0.3)' }} />
      <h1>About Michael</h1>
      <p>
        This is a personal project created to test my skills in programming using my existing knowledge of React. This entire project is built in React, and the database is Google's Firebase, which was something new yet familiar to learn and integrate into my project.
      </p>
      <p>
        beanFactory is a place where I also get to share one of my favorite hobbies: miniature painting. I love collecting tabletop games such as Dungeons & Dragons, Warhammer, etc. These games can typically be played with miniature figures representing characters in those games. These miniatures are often purchased unpainted and disassembled. One of my favorite things to do is paint these miniatures!
      </p>
      <br />
      <br />

      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ margin: '0 10px' }}>
          <a href='https://www.linkedin.com/in/michael-lopez-a7436b157/' style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href='mailto: miketatooine@gmail.com' style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
            Email Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
