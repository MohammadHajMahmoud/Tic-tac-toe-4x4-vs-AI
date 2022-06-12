const maxDepth = 9;
function bestMove() {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, 0, bestScore, +Infinity, false);
          board[i][j] = ''; 
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
          console.log(bestScore);
        }
      }
    }
    board[move.i][move.j] = ai;
    currentPlayer = human;
  }
  
  let scores = {
    'AI': 1,
    'Player': -1,
    'tie': 0
  };
  function minimax(board, depth, alpha, beta, isMaximizing){
        //Recurrsion Stopping Condition

    if (depth == maxDepth) return 0;
    let result = checkWinner();
    if(result!=null )
      return scores[result];
 
    let bestScore;
    if(isMaximizing) {
      bestScore = -Infinity;
  
      for(let i=0; i<4; i++)
      {
        for(let j=0; j<4; j++)
        {
          if(board[i][j]=='') {
            board[i][j] = ai;
            let score = minimax(board, depth+1, alpha, beta, false);
            board[i][j] = '';
            bestScore = max(score, bestScore);
            alpha = max(alpha, score);
            if(beta <= alpha)
            return bestScore;
            
          }
        }
      }
      return bestScore;
    }
  
    else {
      bestScore = +Infinity;
  
      for(let i=0; i<4; i++)
      {
        for(let j=0; j<4; j++)
        {
          if(board[i][j]=='') {
            board[i][j] = human;
            let score = minimax(board, depth+1, alpha, beta, true);
            board[i][j] = '';
            bestScore = min(score, bestScore);
            beta = min(score, beta);
            if(beta <= alpha)
            return bestScore;
          }
        }
      }
      return bestScore;
    }
  }
  