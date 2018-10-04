import React from 'react'
import TeamLogo from './elements/TeamLogo'
import TeamInfo from './elements/TeamInfo'
import ColorBar from './elements/ColorBar'

export default props => (
  <header>
    <div className="bg-light-gray h5 tc flex justify-around items-center">
      <TeamLogo className="h4" />
      <TeamInfo />
    </div>
    <ColorBar />
    <ColorBar modifiers={['secondary']} />
  </header>
)
