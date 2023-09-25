// Content.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import lightImage from '../image/light-bulb-on.png';
import darkImage from '../image/light-bulb-off.jpg';

function Content() {
  const { theme } = useTheme();

  const altText = theme === 'light' ? 'Light' : 'Dark';

  return (
    <div className={`content ${theme}`}>
      <p>This is the main content of the application in {altText} theme.</p>
      <img src={theme === 'light' ? lightImage : darkImage} alt={altText} />
    </div>
  );
}
export default Content;
