import React from 'react';

class SessionUi extends React.Component {
  render() {
    return(
      <div className="lengths__child">
        <div className="lengths__child2">
          <p>session length</p>
        </div>
        <div className="lengths__child2">
          <p>
            <button className="btn btn-basic" onClick={() => this.props.adjustSession(-1)}>-</button>
            <label className="length-numbers">{this.props.sessionTime / 60}</label>
            <button className="btn btn-basic" onClick={() => this.props.adjustSession(1)}>+</button>
          </p>
        </div>
      </div>
    );
  }
};

export default SessionUi;