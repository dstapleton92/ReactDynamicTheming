import React from 'react'
import { withCMSData } from '../hoc/withCMSData'

const TeamInfo = props => (
  <div>
    <h1 className="ph2">{props.team.name}</h1>
    <table className="w-100">
      <tr>
        <td className="w-50 tr b">Slogan</td>
        <td className="w-50 tl">{props.team.slogan}</td>
      </tr>
      <tr>
        <td className="w-50 tr b">Mascot</td>
        <td className="w-50 tl">{props.team.mascot}</td>
      </tr>
    </table>
  </div>
)

export default withCMSData(TeamInfo)
