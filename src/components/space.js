import "../styles/Board.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Board from "./Board";

class space extends Component {

    state = {
        addingBoard: false
      };
    
      toggleAddingList = () =>
        this.setState({ addingBoard: !this.state.addingBoard });
    

    render() {
        return(
            <div className="space">
                <Board />
            </div>
        );
    }
}


export default space;