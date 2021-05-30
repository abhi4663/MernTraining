import React from "react";
import Cell from "./BoardCell";
import values from "./TicTacToeGame";

//let tableData=[];
class TicTacToeBoard extends React.Component {
  render() {
    return (
      <>
        <div className="board">
          {this.props.cells.map((value, index) => (
            <Cell
              id={index}
              value={value}
              onCellClick={this.props.handle}
              onWinner={this.props.win ? this.props.win.array : null}
            />
          ))}
        </div>
      </>
    );
  }
}

export default TicTacToeBoard;
