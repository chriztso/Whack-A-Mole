import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time : 60, 
            score : 0, 
            choice: 0
        }
    this.start = this.start.bind(this);    
    }
    start(){
        var choices = [1,2,3,4,5,6];
        for(var i = 59999; i >= 0; i--){
            if(i % 100 === 0){
              var second  =  i / 100;
              this.setState({time : second});
              var randomIndex = Math.floor(Math.random() * (choices.length - 1));
              var newChoice = choices[randomIndex];
              this.setState({choice : newChoice});
            }
        }
    }
    render(){
        return (
            <div>
                Time: {this.state.time}
                Choice: {this.state.choice}
            </div>
        )
    }
}

export default App;