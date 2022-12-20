import React, { Component } from 'react'
import basicInfo from './components/basicInfo';
import Hard from './components/Hard';
/* VERY EASY */
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Rene Javier Santiago Novoa</h2>
        <h2>787-600-9370</h2>
        <h2>19/05/1998</h2>
      </div>
    )
  }
}



/* EASY */
export default class App extends Component {
  constructor(props) {
    
    // Calling super class constructor
    super(props);
    
    // Creating state
    this.state = {
    person: ''
    }
  render() {
    return 
  }
}
}


/* MEDIUM */
export default class App extends Component {
  constructor(props) {
    
    // Calling super class constructor
    super(props);
    
    // Creating state
    this.state = {
    person: 'Rene Javier Santiago Novoa, 787-600-9370, 10/05/1998'
    }
  render() {
    return (
      <div>
      <basicInfo />
      </div>
    )
  }
}
}

/* HARD */

export default class App extends Component {
  render() {
    return (
      <div>
        <Hard />
      </div>
    )
  }
}
