import React from "react";

import photo_discord from '../assets/discord.png';
import photo_github from '../assets/github.png';
import photo_email from '../assets/email.png';

function Logos({ darkMode }) {
  return (
    <div>
      <a href="mailto:filipxpp@wp.pl">
        <img src={photo_email} alt='Email icon' />
      </a>
      <a href="https://github.com/YoFilip" target="_blank" rel="noopener noreferrer">
        <img src={photo_github} alt='Github icon' />
      </a>
      <a href="https://discord.gg/7zRPX4fk" target="_blank" rel="noopener noreferrer">
        <img src={photo_discord} alt='Discord icon' />
      </a>
    </div>
  );
}

export default Logos;
