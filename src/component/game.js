import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      step: 0
    }
  }

  nextPlayer(idx) {
    return idx % 2 === 0 ? "X" : "O";
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(const [a, b, c] of lines){
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  handleClick(num) {
    const { step } = this.state;
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[step];
    const squares = current.squares.slice();
    if (squares[num] || this.calculateWinner(squares)) {
      return;
    }
    squares[num] = this.nextPlayer(step);
    this.setState( {
      history: history.concat({squares: squares}),
      step: step + 1
    })
  }

  getMoves() {
    return this.state.history.map((step, idx) => {
      const desc = idx ? `Go to move #${idx}` : 'Go to game start';
      return (
        <li key={idx}>
          <button onClick={() => {this.goto(idx)}}>{desc}</button>
        </li>
      )
    })
  }

  goto(idx) {
    this.setState({
      history: this.state.history,
      step: idx
    });
  }

  render() {
    const history = this.state.history
    const squares = history[this.state.step].squares;
    const winner = this.calculateWinner(squares);
    let status;
    if (winner) {
      status = `winner: ${winner}`
    } else if (this.state.step === 9) {
      status = 'draw';
    }
    else {
      status = `Next player: ${this.nextPlayer(this.state.step)}`
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} 
          onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {this.getMoves()}
          </ol>
          {
            (this.state.step >= 1) && (<button
              onClick={() => {
                this.setState({
                  step: this.state.step - 1,
                  history: this.state.history.slice(0, this.state.step )
                });
              }}>undo</button>)
          }
          {
            ((winner) || (status === "draw")) && (<button
              onClick={() => {
                this.setState({
                  history: [
                    {squares: Array(9).fill(null)}
                  ],
                  step: 0
                });
              }}
            >restart</button>)
          }
        </div>
      </div>
    )
  }
}

export default Game;