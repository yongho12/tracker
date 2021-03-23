import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
   
    }
    return (
           <form ref={formRef} className="add-form" onSubmit={onSubmit}>
               <input ref={inputRef} type="text" className="add-iinput" placeholder="Habit"></input>
               <button className="add-button">Add Habit</button>
           </form>
        );
    });

export default HabitAddForm;
