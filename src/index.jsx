import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Popular from './components/Popular';


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, root ,
  document.getElementById('app')
)