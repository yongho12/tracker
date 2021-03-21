import { Component } from 'react';
import './app.css';
import Habbits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
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
   

  render(){
    return (
      <>
          
          <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length} /> 
          <Habbits
            habits={this.state.habits} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrememt}
            onDelete={this.handleDelte}
            />
      </>
    )
  }
}
export default App;
