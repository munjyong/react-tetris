import React from 'react';
import { StyledInstructions } from './styles/StyledInstructions';

const Instructions = () => (
    <StyledInstructions>
        <p>
            <bold>Instructions</bold>
        </p>
        <p>
            <bold>Movement</bold>
            - Left & Right arrow keys
        </p>
        <p>
            <bold>Rotate Tetromino's</bold>
            - Up arrow key
        </p>
        <p>
            <bold>Move Tetromino's Down Quicker</bold>
            - Down arrow key
        </p>
    </StyledInstructions>
);
  
export default Instructions;