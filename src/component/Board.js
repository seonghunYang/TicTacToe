import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderRow(rowNum) {
    return (
      <div className="row">
        <Square value={rowNum }/>
        <Square value={rowNum + 1}/>
        <Square value={rowNum + 2}/>
      </div>
    );
  }
  render() {
    const status = "Next player: X"
    return (
      //square도 이제 component가 된거!
      <div>
        <div className="status">{status}</div>
        {this.renderRow(0)}
        {this.renderRow(3)}
        {this.renderRow(6)}
      </div>      

    );
  }
}

// jsx는 xml이라서 다른 특성이 있다.
// 1. Root가 있어야한다.
// 2. 열린게 있으면 닫힌 tag가 있어야한다. <br>같은게 없음 <br/>로 써야함


export default Board;