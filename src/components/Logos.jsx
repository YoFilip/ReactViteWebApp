import React from "react";

import photo_discord from '../assets/discord.png';
import photo_github from '../assets/github.png';
import photo_email from '../assets/email.png';

function Logos({ darkMode }) {
  return (
    <div>
      <a href="mailto:email@email.com">
        <img src={photo_email} alt='Email icon' />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img src={photo_github} alt='Github icon' />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img src={photo_discord} alt='Discord icon' />
      </a>
    </div>
  );
}

export default Logos;
