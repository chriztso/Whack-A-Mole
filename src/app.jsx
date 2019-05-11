import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time : 60, 
            score : 0, 
            choice: 0, 
            timeout: null,
        }
    this.start = this.start.bind(this);   
    this.changeTimeAndChoice = this.changeTimeAndChoice.bind(this); 
    }

    start(){
        var timeout = setTimeout(this.changeTimeAndChoice, 1000);
        this.setState({timeout : timeout});
    }
    changeTimeAndChoice(){
        var choices = [1,2,3,4,5,6];
        var timeChange = this.state.time - 1;
        this.setState({time : timeChange});
        var randomIndex = Math.floor(Math.random() * choices.length);
        this.setState({choice : choices[randomIndex]});
        var timeout2 = setTimeout(this.changeTimeAndChoice, 1000);
        this.setState({timeout : timeout2});
        if(this.state.timeout === 61){
            clearTimeout(timeout2);
        }
    }
    render(){
        return (
            <div>
                Time: {this.state.time}
                Choice: {this.state.choice}
                Timeout: {this.state.timeout}
                <input type = 'submit' onClick = {this.start}></input>
            </div>
        )
    }
}

export default App;