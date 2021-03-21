import React, { Component } from 'react';

class Habit extends Component {
  
    handleIncrememt = ()   =>{
        this.props.onIncrement(this.props.habit);
    }

    handleDecrememt = ()=>{
        this.props.onDecrement(this.props.habit)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }
    
    
    render() {
        const { name, count } = this.props.habit;
        return (
            <>    
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrememt}>
                    <i className="fas fa-plus-square"></i>
                </button >
                 <button className="habit-button habit-increase" onClick={this.handleDecrememt}>
                    <i className="fas fa-minus-square"></i>
                </button >
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </>
        );
    }
}

export default Habit;