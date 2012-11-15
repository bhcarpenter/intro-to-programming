---
#Multidimensional Arrays
- When you create an array of arrays it can be called a multidimensional array
- 2D multidimensional arrays are good for representing grids, coordinates, images

Here is an example simulating a tic-tac-toe board

    !javascript
    var board = [
      ['X', 'O', 'X'],
      ['O', 'O', 'X'],
      ['O', 'X', 'O']
    ];

    show( board[0][0] );
    show( board[1][2] );

---
#Multidimensional Arrays
Here's an example of building the previous tic-tac-toe board randomly.

    !javascript
    var board = [];

    for(var i = 0; i < 3; i++){
        // Build a new row
        var row = [];

        for(var j = 0; j < 3; j++){
           row[j] = Math.random() > .5 ? 'X':'O'; 
        }

        // Add the row to the board array
        board[i] = row;
    }

    show(board[0][0] + board[0][1] + board[0][2]);
    show(board[1][0] + board[1][1] + board[1][2]);
    show(board[2][0] + board[2][1] + board[2][2]);

---
