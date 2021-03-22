import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
   
    }

    render() {
       
        return (
           <form className="add-form" onSubmit={this.onSubmit}>
               <input ref={this.inputRef} type="text" className="add-iinput" placeholder="Habit"></input>
               <button className="add-button">Add</button>
           </form>

        );
    }
}

export default HabitAddForm;