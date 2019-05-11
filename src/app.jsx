import React from 'react';
import AppStyle from './app.css';

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
    this.addScore = this.addScore.bind(this);
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
    addScore(){
        var score = this.state.score; 
        this.setState({score: score + 1});
    }
    render(){
        return (
          <div className = {AppStyle.wholeDiv}>
            <div className = {AppStyle.topHalf}>
              <div className = {AppStyle.title}>
                Hit Luffy!  
              </div>
              <div className = {AppStyle.timeAndScore}>
                <div className = {AppStyle.timeBox}>
                    <span className = {AppStyle.time}>Time : </span> <span className={AppStyle.timeText}>{this.state.time} </span>
                </div>
                <div className = {AppStyle.scoreBox}>
                    <span className = {AppStyle.score}>Score : </span> <span className={AppStyle.scoreText}>{this.state.score} </span>
                </div>
                <input type='submit' onClick={this.start} value="Start"></input>
              </div>
              <div className = {AppStyle.leaders}>
                High Scores
              </div>
            </div>

            <div className = {AppStyle.bottomHalf}>
              <div className ={AppStyle.firstRow}>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                    {this.state.choice === 1 &&
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                    }
                    </div>
                    <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>    
                </div>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                    {this.state.choice === 2 &&  
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                    }  
                    </div>
                    <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>   
                </div>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                      {this.state.choice === 3 &&
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                      }
                    </div>
                    <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>    
                </div>
              </div>
              <div className ={AppStyle.secondRow}>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                      {this.state.choice === 4 &&  
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                      }
                    </div>
                    <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>    
                </div>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                      {this.state.choice === 5 &&  
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                      }
                    </div>
                    <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>    
                </div>
                <div className = {AppStyle.mole}>
                    <div className={AppStyle.targetOuter}>
                      {this.state.choice === 6 &&
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/luffy.jpg" className={AppStyle.target} onClick={this.addScore}></img>
                      }
                    </div>
                   <div >
                      <img src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/thosandSunny.png" className={AppStyle.ship}></img>
                    </div>    
                </div>
              </div>

            </div>

              
          </div>
        )
    }
}

export default App;