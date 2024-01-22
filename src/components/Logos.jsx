import React from "react";

import photo_discord_dark from '../assets/discord-dark.png';
import photo_github_dark from '../assets/github-dark.png';
import photo_email_dark from '../assets/email-dark.png';

import photo_discord from '../assets/discord.png';
import photo_github from '../assets/github.png';
import photo_email from '../assets/email.png';

function Logos({ darkMode }) {
  return (
    <div>
      <a href="mailto:filipxpp@wp.pl">
        <img src={darkMode ? photo_email_dark : photo_email} alt='Email icon' />
      </a>
      <a href="https://github.com/YoFilip" target="_blank" rel="noopener noreferrer">
        <img src={darkMode ? photo_github_dark : photo_github} alt='Github icon' />
      </a>
      <a href="https://discord.gg/7zRPX4fk" target="_blank" rel="noopener noreferrer">
        <img src={darkMode ? photo_discord_dark : photo_discord} alt='Discord icon' />
      </a>
    </div>
  );
}

export default Logos;
