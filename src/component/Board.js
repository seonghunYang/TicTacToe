import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

  renderSquare(num) {
    return (
      <Square value={this.props.squares[num]} 
      onClick={() => {
        this.props.onClick(num);
      }}
      />
    );
  }

  renderRow(rowNum) {
    return (
      <div className="row">
        {this.renderSquare(rowNum * 3 + 0)}
        {this.renderSquare(rowNum * 3 + 1)}
        {this.renderSquare(rowNum * 3 + 2)}
      </div>
    );
  }

  render() {

    return (
      //square도 이제 component가 된거!
      <div>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
      </div>      
    );
  }
}

// jsx는 xml이라서 다른 특성이 있다.
// 1. Root가 있어야한다.
// 2. 열린게 있으면 닫힌 tag가 있어야한다. <br>같은게 없음 <br/>로 써야함


export default Board;