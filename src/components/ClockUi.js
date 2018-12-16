import React from 'react';

class ClockUi extends React.Component {
  render() {
    return(
      <div id="clock">
        <div className="clock__child"><label className="clock__letters">{this.props.sessionStatus}</label></div>
        <div className="clock__child"><label className="clock__numbers">{this.props.displayTime(this.props.currentTime)}</label></div>
        <button className="btn btn-default clock__child" id="start-stop" onClick={() => this.props.startStop()}>start - stop</button>
      </div>
    );
  }
};

export default ClockUi;