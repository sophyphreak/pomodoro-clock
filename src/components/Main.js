import React from 'react';
import BreakUi from './BreakUi';
import SessionUi from './SessionUi';
import ClockUi from './ClockUi';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5 * 60,
      sessionTime: 25 * 60,
      currentTime: 25 * 60,
      timer: null,
      timerStatus: 'pause',
      sessionStatus: 'session time'
    };
  };

  componentDidMount() {
    let timer = setInterval(() => {
      if (this.state.timerStatus === "run") {
          this.tick();
      };
    }, 1000);
    this.setState({ timer });
  };

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  };

  startStop() {
    if (this.state.timerStatus === "run") {
      let timerStatus = "pause";
      this.setState({ timerStatus });
    } else {
      let timerStatus = "run";
      this.setState({ timerStatus });
    };
  };

  tick() {
    if (this.state.currentTime === 0) {
      let bell = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2017/06/Ting-sound-effect.mp3');
      bell.play();
      if (this.state.sessionStatus === "session time") {
        let sessionStatus = "break";
        let currentTime = this.state.breakTime + 1;
        this.setState({ sessionStatus, currentTime })
      } else if (this.state.sessionStatus === "break") {
        let sessionStatus = "session time";
        let currentTime = this.state.sessionTime + 1;
        this.setState({ sessionStatus, currentTime })
      }
    }
    this.setState({
      currentTime: this.state.currentTime - 1
    });
  }
  
  displayTime( seconds ) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    sec = sec.toString();
    if (sec.length === 1) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  }

  adjustBreak( inc ) {
    if (this.state.timerStatus === "pause") {
      let breakTime = this.state.breakTime + inc * 60;
      if (breakTime < 1) {
        breakTime = 1;
      };
      this.setState({ breakTime });
    };
  };

  adjustSession( inc ) {
    if (this.state.timerStatus === "pause") {
      let sessionTime = this.state.sessionTime + inc * 60;
      if (sessionTime < 1) {
        sessionTime = 1;
      }
      let currentTime = sessionTime;
      this.setState({ sessionTime, currentTime });
    };
  };  
  
  render() {
    return(
      <div id="main">
        <div id="lengths">
          <BreakUi 
            breakTime={this.state.breakTime} 
            adjustBreak={this.adjustBreak.bind(this)}
            />
          <SessionUi
            sessionTime={this.state.sessionTime}
            adjustSession={this.adjustSession.bind(this)}
          />
        </div>
        <ClockUi
          sessionStatus={this.state.sessionStatus}
          currentTime={this.state.currentTime}
          displayTime={this.displayTime.bind(this)}
          startStop={this.startStop.bind(this)}
        />
      </div>
    );
  }
};

export default Main;