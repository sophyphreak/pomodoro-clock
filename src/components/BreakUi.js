import React from 'react';

class BreakUi extends React.Component {
  render() {
    return(
      <div className="lengths__child">
        <div className="lengths__child2">
          <p>break length</p>
        </div>
        <div className="lengths__child2">
          <p>
            <button className="btn btn-basic" onClick={() => this.props.adjustBreak(-1)}>-</button>
            <label className="length-numbers">{this.props.breakTime / 60}</label>
            <button className="btn btn-basic" onClick={() => this.props.adjustBreak(1)}>+</button>
          </p>
        </div>
      </div>
    );
  }
};

export default BreakUi;