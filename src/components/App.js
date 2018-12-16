import React from 'react';
import TitleBar from './TitleBar';
import Main from './Main'

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <TitleBar />
        <Main />
      </div>
    );
  }
};

export default App;
