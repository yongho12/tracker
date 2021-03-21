import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count:0 },
            { id: 2, name: 'Running', count:0 },
            { id: 3, name: 'Coding', count:0 },
        ]
    }


    handleIncrement = (habit)=>{
       console.log(`handleIncrement ${habit.name}`)
       const habits = [...this.state.habits];
       const index = habits.indexOf(habit);
       habits[index].count++;
       this.setState({ habits });
     
    }

    handleDecrememt = (habit)=>{
         console.log(`handleDecrement ${habit.name}`)
         const habits = [...this.state.habits];
         const index = habits.indexOf(habit);
         const count = habits[index].count -1;
         habits[index].count = count < 0 ? 0:count;
         this.setState({ habits });
    }

    handleDelte = (habit) => {
         console.log(`handleDelete ${habit.name}`)
         const habits = this.state.habits.filter(item => item.id !== habit.id);
         this.setState({ habits });
         
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
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