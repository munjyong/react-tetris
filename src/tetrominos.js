export const TETROMINOS = {
    // Empty shape
    0: { shape: [[0]], color: '0, 0, 0' },
    // Use 2D array to store the shape structure and color of each tetromino
    I: {
        shape: [
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0], 
            [0, 'I', 0, 0]
        ],
        color: '216, 51, 126',
    },
    J: { 
        shape: [
            [0, 'J', 0], 
            [0, 'J', 0], 
            ['J', 'J', 0]
        ], 
        color: '195, 237, 78' 
    },
    L: {
        shape: [
            [0, 'L', 0], 
            [0, 'L', 0], 
            [0, 'L', 'L']
        ],
        color: '56, 18, 180',
    },
    O: { 
        shape: [
            ['O', 'O'], 
            ['O', 'O']
        ], 
        color: '3, 105, 181' 
    },
    S: { 
        shape: [
            [0, 'S', 'S'], 
            ['S', 'S', 0], 
            [0, 0, 0]
        ], 
        color: '247, 235, 15' 
    },
    T: {
        shape: [
            [0, 0, 0], 
            ['T', 'T', 'T'], 
            [0, 'T', 0]
        ],
        color: '36, 252, 188',
    },
    Z: { 
        shape: [
            ['Z', 'Z', 0], 
            [0, 'Z', 'Z'], 
            [0, 0, 0]
        ], 
        color: '215, 34, 202' 
    }
  };
  
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };
