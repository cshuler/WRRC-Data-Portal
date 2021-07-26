import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
	
  render() {
    return (
    	<div>
	    <h1>Helo World</h1>
	</div>
    );
  }
}
