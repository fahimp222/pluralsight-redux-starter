import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render() {
    return (
      <div className="jumbotron">
        <h1>Assit</h1>
        <p>Get an Assit, any errand any time!</p>
        <Link to="schedule_assist" className="btn btn-primary btn-lg">Scheduel Assit</Link>
      </div>
    );
  }
}

export default HomePage;
