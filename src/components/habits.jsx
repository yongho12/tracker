import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
   


    handleIncrement = (habit)=>{
      this.props.onIncrement(habit);
     
    }

    handleDecrememt = (habit)=>{
        this.props.onDecrement(habit);
    }

    handleDelte = (habit) => {
        this.props.onDelete(habit);
         
    }
    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
                <Habit 
                    key={habit.id} 
                    habit={habit} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrememt}
                    onDelete={this.handleDelte}
                />
                ))}
            </ul>
        );
    }
}

export default Habits;