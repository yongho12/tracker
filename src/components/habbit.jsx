import React, { Component } from 'react';

class Habbit extends Component {
    state = {
        count:0,
    }

    handleIncrememt = ()=>{
        this.setState( {count:this.state.count + 1} )
    }

    handleDecrememt = ()=>{
        const count = this.state.count -1;
        this.setState({ count: count<0 ? 0:count} )
    }
    
    
    render() {
        return (
            <>    
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrememt}>
                    <i className="fas fa-plus-square"></i>
                </button >
                 <button className="habit-button habit-increase" onClick={this.handleDecrememt}>
                    <i className="fas fa-minus-square"></i>
                </button >
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </>
        );
    }
}

export default Habbit;