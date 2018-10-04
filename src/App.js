import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import { CMSDataProvider } from './contexts/CMSData'
import { getCMSData } from './services/cms'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: getCMSData('georgia'),
      setTeam: this.setTeam
    }
  }

  setTeam = team => {
    this.setState({ team: getCMSData(team) })
  }

  render() {
    return (
      <CMSDataProvider value={this.state}>
        <div className="mw8 center">
          <Header />
          <Content />
        </div>
      </CMSDataProvider>
    );
  }
}

export default App;
