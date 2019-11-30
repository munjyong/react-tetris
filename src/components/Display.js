import React from 'react';
import { StyledDisplay } from './styles/StyledDisplayMenu';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
